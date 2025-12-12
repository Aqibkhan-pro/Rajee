import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GivenDevicesRoutingModule } from './given-devices-routing.module';
import { AssignDevicesComponent } from './assign-devices/assign-devices.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared-module';


@NgModule({
  declarations: [
    AssignDevicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GivenDevicesRoutingModule,
    IonicModule,
  ]
})
export class GivenDevicesModule { }
