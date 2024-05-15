import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentHistory, initialAssignmentHistoryState } from 'app/admin/models/assignment-history';
import { AssignmentHistoryService } from 'app/admin/services/assignment-history.service';
import { DriverService } from '../../services/driver.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-assignment-history-detail',
  templateUrl: './assignment-history-detail.component.html',
})
export class AssignmentHistoryDetailComponent implements OnInit, OnDestroy {
  @Input() assignmentHistoryData: Partial<AssignmentHistory> = initialAssignmentHistoryState;
  drivers: any[] = [];
  vehicles: any[] = [];
  assignmentHistoryDataForm: FormGroup;

  constructor(
    private assignmentHistoryService: AssignmentHistoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private driverService: DriverService,
    private vehicleService: VehicleService
  ) {
    this.assignmentHistoryDataForm = new FormGroup({
      driverId: new FormControl(null, [Validators.required]),
      vehicleId: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.loadAssignmentHistoryData();
    this.loadDrivers();
    this.loadVehicles();
  }

  ngOnDestroy(): void {
    Object.assign(this.assignmentHistoryData, initialAssignmentHistoryState);
  }

  loadAssignmentHistoryData(): void {
    const assignmentHistoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.assignmentHistoryService.getOne(assignmentHistoryId).subscribe((data: Partial<AssignmentHistory>) => {
      this.assignmentHistoryDataForm.patchValue(data);
    });
  }

  update(): void {
    const assignmentHistoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.assignmentHistoryService.updateOne(assignmentHistoryId, this.assignmentHistoryDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/assignationHistory']);
    });
  }

  loadDrivers(): void {
    this.driverService.getAll().subscribe((res: any[]) => {
      this.drivers = res;
    });
  }

  loadVehicles(): void {
    this.vehicleService.getAll().subscribe((res: any[]) => {
      this.vehicles = res;
    });
  }

  get vehicleId() {
    return this.assignmentHistoryDataForm.get('vehicleId');
  }

  get driverId() {
    return this.assignmentHistoryDataForm.get('driverId');
  }
}
