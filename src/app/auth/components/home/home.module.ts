import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoraiteComponent } from './favoraite/favoraite.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared-module';
import { IsArabicPipe } from 'src/app/shared/is-arabic.pipe';
import { PoliciesComponent } from './policies/policies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    HomePageRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    IsArabicPipe,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [
    HomePage,
    DashboardComponent,
    FavoraiteComponent,
    ChatComponent,
    ChatInboxComponent,
    ProfileComponent,
    PoliciesComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
