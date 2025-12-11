import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GivenDevicesComponent } from './given-devices.component'; 

const routes: Routes = [
  { path: '',  component: GivenDevicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GivenDevicesRoutingModule { }
