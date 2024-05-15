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

 


  delete(assignmentHistoryId: number | undefined): void {
    if (assignmentHistoryId) { // Verificar si driverId no es undefined
      this.assignmentHistoryService
        .delete(assignmentHistoryId)
        .pipe(tap(() => this.getAllAssignmentHistory())) // Actualización de la lista después de la eliminación
        .subscribe(() => {
          // Opcional: Redirigir después de la eliminación
          this.router.navigate(['/admin/assignationHistory']);
        });
    }
  }
  

  
}
