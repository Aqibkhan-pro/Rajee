import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpLink } from 'apollo-angular/http';
import { ApolloClient, InMemoryCache, from } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import { environment } from 'src/environments/environment';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { constants } from '../utils/constants';

export function createApollo(httpLink: HttpLink) {

  const http = httpLink.create({
    uri: environment.apiUrl,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem(constants.Token)
    console.log('token', token);
    if (headers instanceof HttpHeaders) {
      const newHeaders = (headers as HttpHeaders).set(
        'Authorization',
        token ? `Bearer ${token}` : ''
      );
      return { headers: newHeaders };
    }

    const plain = (headers as Record<string, string> | undefined) ?? {};
    return {
      headers: {
        ...plain,
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    };
  });

  const errorLink = onError((error: {
    graphQLErrors?: readonly any[],
    networkError?: any,
    operation?: any
  }) => {
    const { graphQLErrors, networkError, operation } = error;

    if (graphQLErrors && graphQLErrors?.length) {
      graphQLErrors.forEach((err: any) => {
        console.error('[GraphQL error]', {
          message: err.message,
          locations: err.locations,
          path: err.path,
          extensions: err.extensions
        });
      });
    }

    if (networkError) {
      const status = (networkError as any)?.status ?? (networkError as any)?.statusCode;
      console.error('[Network error]', { networkError, status, operationName: operation?.operationName });
      switch (status) {
         case 400:
          console.log('Bad Request Error');
          break;
        case 401:
          console.log('Unauthorized - redirecting to login');
          break;
        case 404:
          console.log('Not Found');
          break;
        case 500:
        case 505:
          console.log('Server Error');
          break;
        default:
          console.log('Other Network Error', status);
      }
    }
  });

  const link = from([errorLink, authLink, http]);

  return {
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      },
      query: {
        fetchPolicy: 'network-only',
        errorPolicy: 'all'
      },
      mutate: {
        errorPolicy: 'all'
      }
    }
  };
}

@NgModule({
  imports: [
    HttpClientModule,
    ApolloModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule { }
