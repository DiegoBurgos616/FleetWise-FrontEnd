import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from '../pages';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { EditVehicleComponent } from './pages/edit-vehicle/edit-vehicle.component';
import { CreateVehicleComponent } from './pages/create-vehicle/create-vehicle.component';
import { RoutesPageComponent } from './pages/routes-page/routes-page.component';
import { EditRouteComponent } from './pages/edit-route/edit-route.component';
import { CreateRouteComponent } from './pages/create-route/create-route.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { DriversPageComponent } from './pages/drivers-page/driver-page.component';
import { CreateDriverComponent } from './pages/create-driver/create-driver.component';
import { AssignmentHistoryPageComponent } from './pages/assignment-history-page/assignment-history-page.component';
import { CreateAssignmentHistoryComponent } from './pages/create-assignment-history/create-assignment-history.component';
import { EditAssignmentHistoryComponent } from './pages/edit-assignment-history/edit-assignment-history.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersPageComponent,
  },
  {
    path: 'users/:id',
    component: EditUserComponent,
  },
  {
    path: 'createUser',
    component: CreateUserComponent,
  },
  
  
  {
    path: 'assignationHistory',
    component: AssignmentHistoryPageComponent,
  },
  {
    path: 'createAssignmentHistory',
    component: CreateAssignmentHistoryComponent,
  },
  {
    path: 'assignmentHistory/:id',
    component: EditAssignmentHistoryComponent,
  },
  


  {
    path: 'vehicles',
    component: VehiclesPageComponent,
  },
  {
    path: 'vehicle/:id',
    component: EditVehicleComponent,
  },
  {
    path: 'createVehicle',
    component: CreateVehicleComponent,
  },


  {
    path: 'drivers',
    component: DriversPageComponent,
  },
  {
    path: 'drivers/:id',
    component: EditDriverComponent,
  },
  {
    path: 'createDriver',
    component: CreateDriverComponent,
  },
  
  
  {
    path: 'routes',
    component: RoutesPageComponent,
  },
  {
    path: 'routes/:id',
    component: EditRouteComponent,
  },
  {
    path: 'createRoute',
    component: CreateRouteComponent,
  },
  
  
 
  
  {
    path: '**',
    redirectTo: '**',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
