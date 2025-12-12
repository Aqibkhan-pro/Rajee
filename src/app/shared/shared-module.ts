import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { GlobalHeaderComponent } from './components/global-header/global-header.component';

const COMPONENTS = [
  GlobalSearchComponent,
  GlobalHeaderComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class SharedModule { }
