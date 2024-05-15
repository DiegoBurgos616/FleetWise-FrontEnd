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

  driverDataForm: FormGroup;

  constructor(
    private driverService: DriverService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.driverDataForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      licenseNumber: new FormControl('', [Validators.required]),
      curp: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      monthlysalary: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loadDriverData();
  }

  loadDriverData(): void {
    const driverId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (driverId) {
      this.driverService.getOne(driverId).subscribe((data: Partial<Driver>) => {
        this.driverDataForm.patchValue(data);
      });
    } else {
      this.driverDataForm.patchValue(this.driverData);
    }
  }

  save(): void {
    if (this.driverDataForm.valid) {
      const driverId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      if (driverId) {
        this.update(driverId);
      } else {
        this.create();
      }
    }
  }

  create(): void {
    this.driverService.create(this.driverDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/drivers']);
    });
  }

  update(driverId: number): void {
    this.driverService.updateOne(driverId, this.driverDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/drivers']);
    });
  }
}
