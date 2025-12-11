import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivedDevicesComponent } from './received-devices.component';

const routes: Routes = [
   { path: '',  component: ReceivedDevicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedDevicesRoutingModule { }
