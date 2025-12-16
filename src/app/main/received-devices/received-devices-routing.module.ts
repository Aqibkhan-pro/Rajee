import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/shared/utils/app-routes';
import { DevicesComponent } from './devices/devices.component';
import { TechniciansListComponent } from './technicians-list/technicians-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';

const routes: Routes = [
  { path: '',  component: TechniciansListComponent },
  { path: APP_ROUTES.TECHNICIANS_LIST,  component: TechniciansListComponent },
  { path: APP_ROUTES.TASKS_LIST,  component: TasksListComponent },
  { path: APP_ROUTES.DEVICES,  component: DevicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivedDevicesRoutingModule { }
