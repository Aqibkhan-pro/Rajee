import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import { TranslateModule } from '@ngx-translate/core';
import { IsArabicPipe } from "../../../shared/is-arabic.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ProductDetailsPageRoutingModule,
    IsArabicPipe
],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
