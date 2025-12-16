import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceivedDevicesRoutingModule } from './received-devices-routing.module';
import { SharedModule } from 'src/app/shared/shared-module';
import { IonicModule } from '@ionic/angular';
import { DevicesComponent } from './devices/devices.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { PartsListComponent } from './parts-list/parts-list.component';
import { TechniciansListComponent } from './technicians-list/technicians-list.component';
import { FormsModule } from "@angular/forms";
import { TasksListComponent } from './tasks-list/tasks-list.component';


@NgModule({
  declarations: [TasksListComponent,TechniciansListComponent, DevicesComponent, DevicesListComponent, PartsListComponent],
  imports: [
    CommonModule,
    ReceivedDevicesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule
]
})
export class ReceivedDevicesModule { }
