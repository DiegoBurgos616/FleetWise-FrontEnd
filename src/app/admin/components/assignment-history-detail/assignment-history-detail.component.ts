import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentHistory, initialAssignmentHistoryState } from 'app/admin/models/assignment-history';
import { AssignmentHistoryService } from 'app/admin/services/assignment-history.service';
import { DriverService } from '../../services/driver.service'; // Importa el servicio de conductores
import { VehicleService } from '../../services/vehicle.service'; // Importa el servicio de conductores
@Component({
  selector: 'app-assignment-history-detail',
  templateUrl: './assignment-history-detail.component.html',
})
export class AssignmentHistoryDetailComponent implements OnInit, OnDestroy {
  @Input() assignmentHistoryData: Partial<AssignmentHistory> = initialAssignmentHistoryState;
  drivers: any[] = []; // Variable para almacenar la lista de conductores
  vehicles: any[] = []; // Variable para almacenar la lista de conductores

  constructor(
    private assignmentHistoryService: AssignmentHistoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private driverService: DriverService, // Inyecta el servicio de conductores
    private vehicleService: VehicleService, // Inyecta el servicio de conductores
  ) {}

  assignmentHistoryDataForm: FormGroup = new FormGroup({
    driverId: new FormControl(this.assignmentHistoryData.driverId, [Validators.required]),
    vehicleId: new FormControl(this.assignmentHistoryData.vehicleId, [Validators.required]),
   
  });

  ngOnInit(): void {
    Object.assign(this.assignmentHistoryData, initialAssignmentHistoryState);
    this.loadDrivers(); // Carga la lista de conductores cuando se inicializa el componente
    this.loadVehicles(); // Carga la lista de conductores cuando se inicializa el componente
  }

  ngOnDestroy(): void {
    Object.assign(this.assignmentHistoryData, initialAssignmentHistoryState);
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

  
  update(): void {
    const assignmentHistoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.assignmentHistoryService.updateOne(assignmentHistoryId, this.assignmentHistoryDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/assignationHistory']);
    });
  }

  get vehicleId() {
    return this.assignmentHistoryDataForm.get('vehicleId');
  }
  get driverId() {
    return this.assignmentHistoryDataForm.get('driverId');
  }

 
}
