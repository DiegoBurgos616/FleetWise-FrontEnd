import { Component, Input } from '@angular/core';
import { Driver, initialDriverState } from '../../models/driver';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
})
export class DriverDetailComponent {
  @Input() driverData: Partial<Driver> = initialDriverState;

  constructor(
    private driverService: DriverService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  driverDataForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.driverData.firstName, [Validators.required]),
    lastName: new FormControl(this.driverData.lastName, [
      Validators.required,
    ]),
    birthDate: new FormControl(this.driverData.birthDate, [
      Validators.required,
    ]),
    licenseNumber: new FormControl(this.driverData.licenseNumber, [Validators.required]),
    curp: new FormControl(this.driverData.curp, [
      Validators.required,
    ]),
    address: new FormControl(this.driverData.address, [
      Validators.required,
    ]),
    monthlySalary: new FormControl(this.driverData.monthlySalary, [
      Validators.required,
    ]),
  });

  ngOnInit(): void {
    Object.assign(this.driverData, initialDriverState);
  }

  ngOnDestroy(): void {
    Object.assign(this.driverData, initialDriverState);
  }

  update(): void {
    const driverId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.driverService.updateOne(driverId, this.driverData).subscribe();
    this.router.navigate(['/admin/drivers']);
  }

  get firstName() {
    return this.driverDataForm.get('firstName');
  }

  get lastName() {
    return this.driverDataForm.get('lastName');
  }

  get birthDate() {
    return this.driverDataForm.get('birthDate');
  }

  get licenseNumber() {
    return this.driverDataForm.get('licenseNumber');
  }

  get curp() {
    return this.driverDataForm.get('curp');
  }

  get address() {
    return this.driverDataForm.get('address');
  }

  get monthlySalary() {
    return this.driverDataForm.get('monthlySalary');
  }
}
