import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScannerComponent } from './scanner/scanner.component';
import { MainContainerComponent } from './main.component';
import { TimeInProgressComponent } from './modals/time-in-progress/time-in-progress.component';
@NgModule({
  declarations: [
    MainContainerComponent,
    DashboardComponent,
    ScannerComponent,
    TimeInProgressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MainRoutingModule
  ]
})
export class MainModule { }
