import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver, initialDriverState } from '../../models/driver';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
})
export class DriverDetailComponent implements OnInit {
  @Input() driverData: Partial<Driver> = initialDriverState;

  driverDataForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.driverData.firstName, [Validators.required]),
    lastName: new FormControl(this.driverData.lastName, [Validators.required]),
    birthDate: new FormControl(this.driverData.birthDate, [Validators.required]),
    licenseNumber: new FormControl(this.driverData.licenseNumber, [Validators.required]),
    curp: new FormControl(this.driverData.curp, [Validators.required]),
    address: new FormControl(this.driverData.address, [Validators.required]),
    monthlysalary: new FormControl(this.driverData.monthlysalary, [Validators.required]),
  });

  constructor(
    private driverService: DriverService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.driverDataForm.patchValue(this.driverData);
  }

  save(): void {
    if (this.driverData.id) {
      this.update();
    } else {
      this.create();
    }
  }

  create(): void {
    this.driverService.create(this.driverDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/drivers']);
    });
  }

  update(): void {
    if (this.driverData.id) {
      const driverId = Number(this.driverData.id);
      this.driverService.updateOne(driverId, this.driverDataForm.value).subscribe(() => {
        this.router.navigate(['/admin/drivers']);
      });
    }
  }
}
