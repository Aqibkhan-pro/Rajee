import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GivenDevicesComponent } from './given-devices.component';
import { App } from '@capacitor/app';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { AssignDevicesComponent } from './assign-devices/assign-devices.component';

const routes: Routes = [
  {
    path: '',
    component: GivenDevicesComponent,
    children: [
      { path: APP_ROUTES.ASSIGN_DEVICES, component: AssignDevicesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivenDevicesRoutingModule { }
