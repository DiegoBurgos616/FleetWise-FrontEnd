import { Component, Input } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver, initialDriverState } from '../../models/driver';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
})
export class EditDriverComponent {
  @Input() driverEditable: Driver = initialDriverState;
  
  constructor(
    private driverService: DriverService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const driverId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(driverId)) {
      this.driverService.getOne(driverId).subscribe((res) => {
        this.driverEditable = res;
      });
    } else {
      console.error("Invalid driver ID:", driverId);
      // Podrías redirigir a una página de error o manejar esta situación de otra manera.
    }
  }
  
}
