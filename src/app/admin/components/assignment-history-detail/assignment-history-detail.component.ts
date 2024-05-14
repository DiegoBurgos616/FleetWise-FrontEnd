import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentHistory, initialAssignmentHistoryState } from 'app/admin/models/assignment-history';
import { AssignmentHistoryService } from 'app/admin/services/assignment-history.service';

@Component({
  selector: 'app-assignment-history-detail',
  templateUrl: './assignment-history-detail.component.html',
})
export class AssignmentHistoryDetailComponent implements OnInit, OnDestroy {
  @Input() assignmentHistoryData: Partial<AssignmentHistory> = initialAssignmentHistoryState;
 

  constructor(
    private assignmentHistoryService: AssignmentHistoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  assignmentHistoryDataForm: FormGroup = new FormGroup({
    driverId: new FormControl(this.assignmentHistoryData.driverId, [Validators.required]),
    vehicleId: new FormControl(this.assignmentHistoryData.vehicleId, [Validators.required]),
   
  });

  ngOnInit(): void {
    Object.assign(this.assignmentHistoryData, initialAssignmentHistoryState);
  }

  ngOnDestroy(): void {
    Object.assign(this.assignmentHistoryData, initialAssignmentHistoryState);
  }

  update(): void {
    const assignmentHistoryId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.assignmentHistoryService.updateOne(assignmentHistoryId, this.assignmentHistoryData).subscribe();
    this.router.navigate(['/admin/assignment-history']);
  }

  get vehicleId() {
    return this.assignmentHistoryDataForm.get('vehicleId');
  }
  get driverId() {
    return this.assignmentHistoryDataForm.get('driverId');
  }

 
}
