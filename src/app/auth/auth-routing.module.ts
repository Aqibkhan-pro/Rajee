import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';
import { ROUTES } from '../shared/utils/app-routes';
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: ROUTES.LOGIN, pathMatch: 'full' },
      { path: ROUTES.LOGIN, component: LoginComponent },
      { path: ROUTES.FORGET_PASSWORD, component: ForgetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
