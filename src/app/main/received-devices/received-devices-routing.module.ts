import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivedDevicesComponent } from './received-devices.component';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: '',  component: ReceivedDevicesComponent },
  { path: APP_ROUTES.DEVICES,  component: DevicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedDevicesRoutingModule { }
