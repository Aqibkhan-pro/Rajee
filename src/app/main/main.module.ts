import { DeviceDetailsComponent } from './modals/device-details/device-details.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScannerComponent } from './scanner/scanner.component';
import { MainContainerComponent } from './main.component';
import { SharedModule } from '../shared/shared-module';
import { TimeInProgressComponent } from './modals/time-in-progress/time-in-progress.component';
@NgModule({
  declarations: [
    MainContainerComponent,
    DashboardComponent,
    ScannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    MainRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
