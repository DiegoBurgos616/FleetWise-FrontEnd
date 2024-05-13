import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { CreateVehicleComponent } from './pages/create-vehicle/create-vehicle.component';
import { EditVehicleComponent } from './pages/edit-vehicle/edit-vehicle.component';
import { TripDetailComponent } from './components/trip-detail/trip-detail.component';
import { TripFormComponent } from './components/trip-form/trip-form.component';
import { CreateTripComponent } from './pages/create-trip/create-trip.component';
import { EditTripComponent } from './pages/edit-trip/edit-trip.component';
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component';
import { EditDriverComponent } from './pages/edit-driver/edit-driver.component';
import { DriverFormComponent } from './components/driver-form/driver-form.component';
import { CreateDriverComponent } from './pages/create-driver/create-driver.component';

@NgModule({
  declarations: [
    UserDetailComponent,
    EditUserComponent,
    UserFormComponent,
    CreateUserComponent,
    VehicleDetailComponent,
    EditVehicleComponent,
    VehicleFormComponent,
    CreateVehicleComponent,
    TripDetailComponent,
    EditTripComponent,
    TripFormComponent,
    CreateTripComponent,
    DriverDetailComponent,
    EditDriverComponent,
    DriverFormComponent,
    CreateDriverComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
