import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { DevicesComponent } from './devices/devices.component';
import { TechniciansListComponent } from './technicians-list/technicians-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DeviceDetailsComponent } from '../modals/device-details/device-details.component';
import { TimeInProgressComponent } from '../modals/time-in-progress/time-in-progress.component';

const routes: Routes = [
  { path: '',  component: TechniciansListComponent },
  { path: APP_ROUTES.TECHNICIANS_LIST,  component: TechniciansListComponent },
  { path: APP_ROUTES.TASKS_LIST,  component: TasksListComponent },
  { path: APP_ROUTES.DEVICES,  component: DevicesComponent ,children: [
    { path: 'details',  component: DeviceDetailsComponent },
    { path: 'details/time-progress', component: TimeInProgressComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedDevicesRoutingModule { }
