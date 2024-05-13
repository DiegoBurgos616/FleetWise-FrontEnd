import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from '../pages';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { EditVehicleComponent } from './pages/edit-vehicle/edit-vehicle.component';
import { CreateVehicleComponent } from './pages/create-vehicle/create-vehicle.component';
import { TripsPageComponent } from './pages/trips-page/trips-page.component';
import { EditTripComponent } from './pages/edit-trip/edit-trip.component';
import { CreateTripComponent } from './pages/create-trip/create-trip.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { DriversPageComponent } from './pages/drivers-page/driver-page.component';
import { CreateDriverComponent } from './pages/create-driver/create-driver.component';

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
    path: 'vehicles',
    component: VehiclesPageComponent,
  },
  {
    path: 'vehicles/:id',
    component: EditVehicleComponent
  },
  {
    path: 'createVehicle',
    component: CreateVehicleComponent,
  },
  {
    path: 'trips',
    component: TripsPageComponent,
  },
  {
    path: 'trips/:id',
    component: EditTripComponent,
  },
  {
    path: 'createTrip',
    component: CreateTripComponent,
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
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
