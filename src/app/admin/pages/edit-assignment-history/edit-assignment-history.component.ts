import { Component, Input } from '@angular/core';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentHistory, initialAssignmentHistoryState } from '../../models/assignment-history';

@Component({
  selector: 'app-edit-assignment-history',
  templateUrl: './edit-assignment-history.component.html',
})
export class EditAssignmentHistoryComponent {
  @Input() assignmentHistoryEditable: AssignmentHistory = initialAssignmentHistoryState;
  constructor(
    private assignmentService: AssignmentHistoryService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const assignmentHistoryId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.assignmentService.getOne(assignmentHistoryId).subscribe((res) => {
      this.assignmentHistoryEditable = res;
    });
  }

}