import { Component } from '@angular/core';
import { AssignmentHistory } from '../../models/assignment-history';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { DriverService } from '../../services/driver.service'; // Importa el servicio de conductores
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-assignment-history-page',
  templateUrl: './assignment-history-page.component.html',
})
export class AssignmentHistoryPageComponent {
  assignmentHistory: AssignmentHistory[] = [];
  drivers: any[] = []; // Declara una variable para almacenar la lista de conductores

  constructor(
    private assignmentHistoryService: AssignmentHistoryService,
    private driverService: DriverService, // Inyecta el servicio de conductores
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllAssignmentHistory();
    this.loadDrivers(); // Carga la lista de conductores cuando se inicializa el componente
  }

  getAllAssignmentHistory(): void {
    this.assignmentHistoryService.getAll().subscribe((res) => {
      this.assignmentHistory = res;
    });
  }

  loadDrivers(): void {
    this.driverService.getAll().subscribe((res: any[]) => {
      this.drivers = res;
    });
  }

  delete(vehicleId?: string): void {
    const id = Number(vehicleId);
    this.assignmentHistoryService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/assignment-history'])))
      .subscribe(() => {
        this.getAllAssignmentHistory();
        this.loadDrivers(); // Vuelve a cargar la lista de conductores después de eliminar una asignación
      });
  }
}
