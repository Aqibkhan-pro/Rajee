import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthLayoutComponent } from './components/auth/auth-layout.component';
import { APP_ROUTES } from '../shared/utils/app-routes';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { StartedGuard } from './services/started.guard';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: APP_ROUTES.STARTED, pathMatch: 'full' },
      { path: APP_ROUTES.STARTED, component: GetStartedComponent, canActivate: [StartedGuard] },
      { path: APP_ROUTES.LOGIN, component: LoginComponent},
      { path: APP_ROUTES.FORGET_PASSWORD, component: ForgetPasswordComponent },
      { path: APP_ROUTES.SIGNUP, component: SignupComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
