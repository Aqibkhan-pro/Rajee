import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalSegmentComponent } from './components/global-segment/global-segment.component';
import { FormsModule } from '@angular/forms';
import { DeviceDetailsComponent } from '../main/modals/device-details/device-details.component';
import { TimeInProgressComponent } from '../main/modals/time-in-progress/time-in-progress.component';
import { PartsModalComponent } from '../main/modals/parts-modal/parts-modal.component';


const COMPONENTS = [
  GlobalSearchComponent,
  GlobalHeaderComponent,
  GlobalSegmentComponent,
  DeviceDetailsComponent,
  TimeInProgressComponent,
  PartsModalComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    IonicModule,
     FormsModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class SharedModule { }
