import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      // { path: '', redirectTo: 'login', pathMatch: 'full' },
      // { path: 'login', component: LoginComponent },
      // { path: 'forget-password', component: ForgetPasswordComponent }
    ]
  },
  {
    path: 'scan',
    component: ScannerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
