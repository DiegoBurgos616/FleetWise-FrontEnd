import { Component, Input } from '@angular/core';
import { Driver, DriverRequest, initialDriverRequest, initialDriverState } from '../../models/driver';
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
    name: new FormControl(this.driverData.name, [Validators.required]),
    responsibility: new FormControl(this.driverData.responsibility, [Validators.required]),
    qualification: new FormControl(this.driverData.qualification, [Validators.required]),
    salary: new FormControl(this.driverData.salary, [Validators.required]),
    createdAt: new FormControl(this.driverData.createdAt, [Validators.required]),
    updatedAt: new FormControl(this.driverData.updatedAt, [Validators.required]),
    trips: new FormControl(this.driverData.trips, [Validators.required]),
  });


 

  ngOnInit(): void {
  }

  create(): void {
    this.driverService.create(this.driverData).subscribe();
    this.router.navigate(['/admin/drivers']);
  }

  get name() {
    return this.driverDataForm.get('name');
  }

  get responsibility() {
    return this.driverDataForm.get('responsibility');
  }

  get qualification() {
    return this.driverDataForm.get('qualification');
  }

  get salary() {
    return this.driverDataForm.get('salary');
  }

  get createdAt() {
    return this.driverDataForm.get('createdAt');
  }

  get updatedAt() {
    return this.driverDataForm.get('updatedAt');
  }
}
