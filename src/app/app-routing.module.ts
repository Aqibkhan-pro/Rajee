import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/utils/app-routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.AUTH,
    pathMatch: 'full'
  },
  {
    path: ROUTES.AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
   {
    path: ROUTES.MAIN,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
