import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/utils/app-routes';
import { ChatComponent } from './auth/components/home/chat/chat.component';
import { PoliciesComponent } from './auth/components/home/policies/policies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.MAIN, // or whatever your started route is
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: APP_ROUTES.MAIN,
    loadChildren: () => import('./auth/components/home/home.module').then(m => m.HomePageModule),
  },
  {
    path: APP_ROUTES.CHAT,
    component: ChatComponent,
  }, {
    path:'policies',
    component:PoliciesComponent
  }, {
    path: 'product-details',
    loadChildren: () => import('./auth/components/product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },  {
    path: 'admin-panel',
    loadChildren: () => import('./auth/components/admin-panel/admin-panel.module').then( m => m.AdminPanelPageModule)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./auth/components/add-product/add-product.module').then( m => m.AddProductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
