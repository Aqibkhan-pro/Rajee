import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { AuthLayoutComponent } from './components/auth/auth-layout.component';
import { ROUTES } from '../shared/utils/app-routes';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { StartedGuard } from './services/started.guard';
const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: ROUTES.STARTED, pathMatch: 'full' },
      { path: ROUTES.STARTED, component: GetStartedComponent, canActivate: [StartedGuard] },
      { path: ROUTES.LOGIN, component: LoginComponent},
      { path: ROUTES.FORGET_PASSWORD, component: ForgetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
