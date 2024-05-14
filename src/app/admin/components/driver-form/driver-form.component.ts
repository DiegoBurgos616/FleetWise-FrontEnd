import { Component, Input } from '@angular/core';
import { DriverRequest, initialDriverRequest } from '../../models/driver';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../../services/driver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
})
export class DriverFormComponent {
  @Input() driverData: DriverRequest = initialDriverRequest;

  constructor(private driverService: DriverService, private router: Router) {}

  driverDataForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.driverData.firstName, [Validators.required]),
    lastName: new FormControl(this.driverData.lastName, [Validators.required]),
    birthDate: new FormControl(this.driverData.birthDate, [Validators.required]),
    licenseNumber: new FormControl(this.driverData.licenseNumber, [Validators.required]),
    curp: new FormControl(this.driverData.curp, [Validators.required]),
    address: new FormControl(this.driverData.address, [Validators.required]),
    monthlysalary: new FormControl(this.driverData.monthlysalary, [Validators.required]),
  });


 

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.driverData)
    this.driverService.create(this.driverData).subscribe();
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

  get monthlysalary() {
    return this.driverDataForm.get('monthlysalary');
  }
}
