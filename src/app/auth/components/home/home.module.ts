import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoraiteComponent } from './favoraite/favoraite.component';
import { NotificationComponent } from './notification/notification.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TranslateModule
  ],
  declarations: [
    HomePage,
    DashboardComponent,
    FavoraiteComponent,
    NotificationComponent,
    ChatComponent,
    ChatInboxComponent
  ]
})
export class HomePageModule {}
