import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ROUTES } from './shared/utils/app-routes';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.MAIN,
    pathMatch: 'full'
  },
  {
    path: ROUTES.AUTH,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
   {
    path: ROUTES.MAIN,
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
