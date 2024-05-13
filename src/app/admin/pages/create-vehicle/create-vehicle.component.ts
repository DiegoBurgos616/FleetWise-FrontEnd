import { Component, Input } from '@angular/core';
import { VehicleRequest, initialVehicleRequest } from '../../models/vehicle';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
})
export class CreateVehicleComponent {
  @Input() initialVehicle: VehicleRequest = initialVehicleRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
