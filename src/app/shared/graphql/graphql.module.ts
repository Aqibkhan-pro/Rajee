import { NgModule, Injector } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink, injector: Injector): ApolloClient.Options => {
        const authService = injector.get(AuthService);
        const router = injector.get(Router);

        // Attach token
        const authLink = setContext(() => {
          const token = authService.getToken();
          return token
            ? { headers: new HttpHeaders().set('Authorization', `Bearer ${token}`) }
            : {};
        });

        // Global error handling
        const errorLink = onError((error) => {
          // error is typed as ErrorHandlerOptions, we cast to any
          const e: any = error;

          if (e.graphQLErrors) {
            e.graphQLErrors.forEach((err: any) => {
              const { message, locations, path } = err;
              console.error(`[GraphQL error]: Message: ${message}, Path: ${path}, Locations: ${locations}`);
            });
          }

          if (e.networkError) {
            const status = e.networkError.status;
            console.error(`[Network error]:`, e.networkError);
            switch (status) {
              case 401:
                console.log('Unauthorized - redirecting to login');
                authService.clearToken();
                router.navigate(['auth/login']);
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

        return {
          link: authLink.concat(errorLink).concat(httpLink.create({ uri: 'https://api-admin-v2.uat.techbar.com/api' })),
          cache: new InMemoryCache(),
        };
      },
      deps: [HttpLink, Injector]
    }
  ]
})
export class GraphQLModule {}
 