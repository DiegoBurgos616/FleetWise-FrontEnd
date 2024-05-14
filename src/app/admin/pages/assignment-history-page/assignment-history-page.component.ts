import { Component } from '@angular/core';
import { AssignmentHistory } from '../../models/assignment-history';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-assignment-history-page',
  templateUrl: './assignment-history-page.component.html',
})
export class AssignmentHistoryPageComponent {
  assignmentHistory: AssignmentHistory[] = [];

  constructor(private assignmentHistoryService: AssignmentHistoryService, private router: Router) {}

  ngOnInit(): void {
    this.getAllAssignmentHistory();
  }

  getAllAssignmentHistory(): void {
    this.assignmentHistoryService.getAll().subscribe((res) => {
      this.assignmentHistory = res;
    });
  }

  delete(vehicleId?: string): void {
    const id = Number(vehicleId);
    this.assignmentHistoryService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/assignment-history'])))
      .subscribe((res) => this.getAllAssignmentHistory());
  }
}
