import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';
import { GlobalSegmentComponent } from './components/global-segment/global-segment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModalComponent } from '../auth/components/auth/auth-modal/auth-modal.component';
import { TranslateModule } from '@ngx-translate/core';
import { IsArabicPipe } from './is-arabic.pipe';

const COMPONENTS = [
  GlobalSearchComponent,
  GlobalHeaderComponent,
  GlobalSegmentComponent,
  AuthModalComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    IonicModule,
     FormsModule,
     IsArabicPipe,
     ReactiveFormsModule,
     TranslateModule
  ],
  exports: [
    ...COMPONENTS,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }
