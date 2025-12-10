import { NgModule, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { InMemoryCache, from } from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

import { environment } from 'src/environments/environment';
import { constants } from '../utils/constants';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    provideApollo(() => {
      // Inject HttpLink
      const httpLink = inject(HttpLink);

      // Create HTTP Link
      const http = httpLink.create({
        uri: environment.apiUrl,
      });

      // AUTH LINK → Attach token
      const authLink = setContext((_, { headers }) => {
        const token = localStorage.getItem(constants.Token);

        const plainHeaders =
          (headers as Record<string, string> | undefined) ?? {};

        return {
          headers: {
            ...plainHeaders,
            ...(token ? { Authorization: `Bearer ${token}` } : {})
          }
        };
      });

      // ERROR HANDLING LINK
      const errorLink = onError(({ graphQLErrors, networkError, operation }) => {

        // GraphQL Errors
        if (graphQLErrors?.length) {
          graphQLErrors.forEach((err: any) => {
            console.error('[GraphQL error]', {
              message: err.message,
              locations: err.locations,
              path: err.path,
              extensions: err.extensions
            });
          });
        }

        // Network Errors
        if (networkError) {
          const status = (networkError as any)?.status ?? (networkError as any)?.statusCode;

          console.error('[Network error]', {
            networkError,
            status,
            operationName: operation?.operationName
          });

          switch (status) {
            case 400:
              console.log('Bad Request');
              break;
            case 401:
              console.log('Unauthorized – redirect to login');
              break;
            case 404:
              console.log('Not Found');
              break;
            case 500:
            case 505:
              console.log('Server Error');
              break;
            default:
              console.log('Other Network Error:', status);
          }
        }
      });

      // FINAL LINK PIPELINE
      const link = from([errorLink, authLink, http]);

      // RETURN APOLLO CLIENT CONFIG
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
    })
  ]
})
export class GraphQLModule {}
