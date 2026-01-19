import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FavoraiteComponent } from './favoraite/favoraite.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../../services/auth.guard';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'favorites',
        component: FavoraiteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'chat',
        component: ChatInboxComponent,
        canActivate: [AuthGuard],
      },

      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
