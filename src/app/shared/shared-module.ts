import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalSegmentComponent } from './components/global-segment/global-segment.component';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  GlobalSearchComponent,
  GlobalHeaderComponent,
  GlobalSegmentComponent,
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
