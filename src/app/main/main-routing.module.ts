import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScannerComponent } from './scanner/scanner.component';
import { APP_ROUTES } from '../shared/utils/app-routes';

const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      { path: '', redirectTo: APP_ROUTES.DASHBOARD, pathMatch: 'full' },
      { path: APP_ROUTES.DASHBOARD, component: DashboardComponent },
      {
          path: APP_ROUTES.GIVEN_DEVICES,
          loadChildren: () => import('../main/given-devices/given-devices.module').then(m => m.GivenDevicesModule),
      },
      {
          path: APP_ROUTES.PARTS_REQUESTED,
          loadChildren: () => import('../main/parts-requested/parts-requested.module').then(m => m.PartsRequestedModule),
      },
      {
          path: APP_ROUTES.RECEIVED_DEVICES,
          loadChildren: () => import('../main/received-devices/received-devices.module').then(m => m.ReceivedDevicesModule),
      },
       {
          path: APP_ROUTES.REPAIRS,
          loadChildren: () => import('../main/repairs/repairs.module').then(m => m.RepairsModule),
      },
    ]
  },
  {
    path: 'scan',
    component: ScannerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
