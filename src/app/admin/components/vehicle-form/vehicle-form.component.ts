import { Component, Input } from '@angular/core';
import { VehicleRequest, initialVehicleRequest } from '../../models/vehicle';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
})
export class VehicleFormComponent {
  @Input() vehicleData: VehicleRequest = initialVehicleRequest;

  constructor(private vehicleService: VehicleService, private router: Router) {}

  vehicleDataForm: FormGroup = new FormGroup({
    brand: new FormControl(this.vehicleData.brand, [Validators.required]),
    model: new FormControl(this.vehicleData.model, [Validators.required]),
    vin: new FormControl(this.vehicleData.vin, [Validators.required]),
    plate: new FormControl(this.vehicleData.plate, [Validators.required]),
    purchasedDate: new FormControl(this.vehicleData.purchasedDate, [Validators.required]),
    cost: new FormControl(this.vehicleData.cost, [Validators.required]),
    photoUrl: new FormControl(this.vehicleData.photoUrl, [Validators.required]),
  });

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.vehicleData)
    this.vehicleService.create(this.vehicleData).subscribe();
    this.router.navigate(['/admin/vehicles']);
  }

  get brand() {
    return this.vehicleDataForm.get('brand');
  }

  get model() {
    return this.vehicleDataForm.get('model');
  }

  get vin() {
    return this.vehicleDataForm.get('vin');
  }

  get plate() {
    return this.vehicleDataForm.get('plate');
  }

  get purchasedDate() {
    return this.vehicleDataForm.get('purchasedDate');
  }

  get cost() {
    return this.vehicleDataForm.get('cost');
  }
  get photoURL() {
    return this.vehicleDataForm.get('photoUrl');
  }
}
