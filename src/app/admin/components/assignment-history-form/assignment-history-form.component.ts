import { Component, Input, OnInit } from '@angular/core';
import { AssignmentHistoryRequest, initialAssignmentHistoryRequest } from '../../models/assignment-history';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { DriverService } from '../../services/driver.service'; // Importa el servicio de conductores
import { VehicleService } from '../../services/vehicle.service'; // Importa el servicio de conductores

import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-history-form',
  templateUrl: './assignment-history-form.component.html',
})
export class AssignmentHistoryFormComponent implements OnInit {
  @Input() assignmentHistoryData: AssignmentHistoryRequest = initialAssignmentHistoryRequest;
  assignmentHistoryDataForm: FormGroup;
  drivers: any[] = []; // Variable para almacenar la lista de conductores
  vehicles: any[] = []; // Variable para almacenar la lista de conductores

  constructor(
    private assignmentHistoryService: AssignmentHistoryService,
    private driverService: DriverService, // Inyecta el servicio de conductores
    private vehicleService: VehicleService, // Inyecta el servicio de conductores

    private router: Router
  ) {
    this.assignmentHistoryDataForm = new FormGroup({
      vehicleId: new FormControl(this.assignmentHistoryData.vehicleId, [Validators.required]),
      driverId: new FormControl(this.assignmentHistoryData.driverId, [Validators.required]),
    });

    // Suscribirse a los cambios de valor del formulario y actualizar assignmentHistoryData
    this.assignmentHistoryDataForm.valueChanges.subscribe(value => {
      this.assignmentHistoryData = { ...this.assignmentHistoryData, ...value };
    });
  }

  ngOnInit(): void {
    this.loadDrivers(); // Carga la lista de conductores cuando se inicializa el componente
    this.loadVehicles(); // Carga la lista de conductores cuando se inicializa el componente

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

  create(): void {
    console.log(this.assignmentHistoryData);
    this.assignmentHistoryService.create(this.assignmentHistoryData).subscribe(() => {
      // Hacer algo después de la creación, como redirigir
      this.router.navigate(['/admin/assignationHistory']);
    });
  }
}
