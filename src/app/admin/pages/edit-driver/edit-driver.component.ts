import { Component, OnInit } from '@angular/core';
import { DriverService } from '../../services/driver.service';
import { ActivatedRoute } from '@angular/router';
import { Driver, initialDriverState } from '../../models/driver';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
})
export class EditDriverComponent implements OnInit {
  driverEditable: Driver = initialDriverState;

  constructor(
    private driverService: DriverService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const driverId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (driverId) {
      this.driverService.getOne(driverId).subscribe((res) => {
        this.driverEditable = res;
      });
    }
  }
}
