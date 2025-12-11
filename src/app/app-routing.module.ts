import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './shared/utils/app-routes';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.MAIN,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
   {
    path: APP_ROUTES.MAIN,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
