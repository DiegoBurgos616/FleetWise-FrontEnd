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



  delete(vehicleId: number | undefined): void {
    if (vehicleId) { // Verificar si driverId no es undefined
      this.vehicleService
        .delete(vehicleId)
        .pipe(tap(() => this.getAllVehicles())) // Actualización de la lista después de la eliminación
        .subscribe(() => {
          // Opcional: Redirigir después de la eliminación
          this.router.navigate(['/admin/vehicles']);
        });
    }
  }
}
