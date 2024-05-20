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
    purchasedDate: new FormControl(this.vehicleData.purchasedDate, [Validators.required]),
    cost: new FormControl(this.vehicleData.cost, [Validators.required]),
    photoUrl: new FormControl(this.vehicleData.photoUrl, [Validators.required]),
  });

  ngOnInit(): void {
    this.vehicleDataForm.patchValue(this.vehicleData);
  }

  save(): void {
    if (this.vehicleData.id) {
      this.update();
    } else {
      this.create();
    }
  }



  create(): void {
    this.vehicleService.create(this.vehicleDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/vehicles']);
    });
  }


  update(): void {
    const vehicleId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.vehicleService
      .updateOne(vehicleId, this.vehicleData)
      .subscribe();
      this.router.navigate(['/admin/vehicles']);
    }


}