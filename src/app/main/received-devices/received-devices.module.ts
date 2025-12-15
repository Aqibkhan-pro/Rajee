import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivedDevicesRoutingModule } from './received-devices-routing.module';
import { SharedModule } from 'src/app/shared/shared-module';
import { IonicModule } from '@ionic/angular';
import { ReceivedDevicesComponent } from './received-devices.component';
import { DevicesComponent } from './devices/devices.component';


@NgModule({
  declarations: [ReceivedDevicesComponent, DevicesComponent],
  imports: [
    CommonModule,
    ReceivedDevicesRoutingModule,
    SharedModule,
    IonicModule,
  ]
})
export class ReceivedDevicesModule { }
