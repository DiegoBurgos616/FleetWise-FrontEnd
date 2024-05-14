import { Component, Input } from '@angular/core';
import { AssignmentHistoryRequest, initialAssignmentHistoryRequest } from '../../models/assignment-history';

@Component({
  selector: 'app-create-assignment-history',
  templateUrl: './create-assignment-history.component.html',
})
export class CreateAssignmentHistoryComponent {
  @Input() initialAssignmentHistory: AssignmentHistoryRequest = initialAssignmentHistoryRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}