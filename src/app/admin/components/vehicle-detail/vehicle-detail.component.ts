import { Component, Input } from '@angular/core';
import { Vehicle, initialVehicleState } from '../../models/vehicle';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
})
export class VehicleDetailComponent {
  @Input() vehicleData: Partial<Vehicle> = initialVehicleState;

  constructor(
    private vehicleService: VehicleService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  vehicleDataForm: FormGroup = new FormGroup({
    brand: new FormControl(this.vehicleData.brand, [Validators.required]),
    model: new FormControl(this.vehicleData.model, [Validators.required]),
    vin: new FormControl(this.vehicleData.vin, [Validators.required]),
    plate: new FormControl(this.vehicleData.plate, [Validators.required]),
    purchaseDate: new FormControl(this.vehicleData.purchaseDate, [Validators.required]),
    cost: new FormControl(this.vehicleData.cost, [Validators.required]),
    photoUrl: new FormControl(this.vehicleData.photoUrl, [Validators.required]),
    entryDate: new FormControl(this.vehicleData.entryDate, [Validators.required]),
  });

  ngOnInit(): void {
    Object.assign(this.vehicleData, initialVehicleState);
  }

  ngOnDestroy(): void {
    Object.assign(this.vehicleData, initialVehicleState);
  }

  update(): void {
    const vehicleId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.vehicleService
      .updateOne(vehicleId, this.vehicleData)
      .subscribe();
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

  get purchaseDate() {
    return this.vehicleDataForm.get('purchaseDate');
  }

  get cost() {
    return this.vehicleDataForm.get('cost');
  }
  get photoURL() {
    return this.vehicleDataForm.get('photoURL');
  }

  get entryDate() {
    return this.vehicleDataForm.get('entryDate');
  }
}
