import { Component, Input } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle, initialVehicleState } from '../../models/vehicle';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
})
export class EditVehicleComponent {
  @Input() vehicleEditable: Vehicle = initialVehicleState;
  constructor(
    private vehicleService: VehicleService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const vehicleId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.vehicleService.getOne(vehicleId).subscribe((res) => {
      this.vehicleEditable = res;
    });
  }

}
