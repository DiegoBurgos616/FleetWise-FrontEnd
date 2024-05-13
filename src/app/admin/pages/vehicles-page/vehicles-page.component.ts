import { Component } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
})
export class VehiclesPageComponent {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles(): void {
    this.vehicleService.getAll().subscribe((res) => {
      this.vehicles = res;
    });
  }

  delete(vehicleId?: string): void {
    const id = Number(vehicleId);
    this.vehicleService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/vehicles'])))
      .subscribe((res) => this.getAllVehicles());
  }
}
