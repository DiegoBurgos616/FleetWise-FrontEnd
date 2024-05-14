import { Component, Input } from '@angular/core';
import { AssignmentHistoryRequest, initialAssignmentHistoryRequest } from '../../models/assignment-history';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-history-form',
  templateUrl: './assignment-history-form.component.html',
})
export class AssignmentHistoryFormComponent {
  @Input() assignmentHistoryData: AssignmentHistoryRequest = initialAssignmentHistoryRequest;

  constructor(private assignmentHistoryService: AssignmentHistoryService, private router: Router) {}

  assignmentHistoryDataForm: FormGroup = new FormGroup({
    vehicleId: new FormControl(this.assignmentHistoryData.vehicleId, [Validators.required]),
    driverId: new FormControl(this.assignmentHistoryData.driverId, [Validators.required]),
  });


 

  ngOnInit(): void {
  }

  create(): void {
    console.log(this.assignmentHistoryData)
    this.assignmentHistoryService.create(this.assignmentHistoryData).subscribe();
    this.router.navigate(['/admin/assignment-history']);
  }

  get vehicleId() {
    return this.assignmentHistoryDataForm.get('vehicleId');
  }

  get driverId() {
    return this.assignmentHistoryDataForm.get('driverId');
  }
}