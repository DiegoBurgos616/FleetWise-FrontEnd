import { Component } from '@angular/core';
import { Driver } from '../../models/driver';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-driver-page',
  templateUrl: './driver-page.component.html',
})
export class DriversPageComponent {
    drivers: Driver[] = [];

  constructor(private driverService: DriverService, private router: Router) {}

  ngOnInit(): void {
    this.getAllDrivers();
  }

  getAllDrivers(): void {
    this.driverService.getAll().subscribe((res) => {
      this.drivers = res;
    });
  }

  delete(driverId: string): void {
    const id = Number(driverId);
    this.driverService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/drivers'])))
      .subscribe((res) => this.getAllDrivers());
  }
}
