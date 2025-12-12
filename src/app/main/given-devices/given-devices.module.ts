import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivenDevicesRoutingModule } from './given-devices-routing.module';
import { AssignDevicesComponent } from './assign-devices/assign-devices.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AssignDevicesComponent
  ],
  imports: [
    CommonModule,
    GivenDevicesRoutingModule,
    IonicModule,
  ]
})
export class GivenDevicesModule { }
