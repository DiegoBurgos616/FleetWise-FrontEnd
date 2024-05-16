import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Route, initialRouteState } from '../../models/route';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../services/route.service';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
})
export class RouteDetailComponent implements OnInit, OnDestroy{
  @Input() routeData: Partial<Route> = initialRouteState;
  assignmentHistory: any[] = [];
  routeDataForm: FormGroup;

  constructor(
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute,
    private assignmentHistoryService: AssignmentHistoryService,
    private router: Router
  ) 
  {
    this.routeDataForm = new FormGroup({
      routeName: new FormControl(this.routeData.routeName, [Validators.required]),
      problemDescription: new FormControl(this.routeData.problemDescription, [Validators.required]),
      comments: new FormControl(this.routeData.comments, [Validators.required]),
      startLatitude: new FormControl(this.routeData.startLatitude, [Validators.required]),
      startLongitude: new FormControl(this.routeData.startLongitude, [Validators.required]),
      endLatitude: new FormControl(this.routeData.endLatitude, [Validators.required]),
      endLongitude: new FormControl(this.routeData.endLongitude, [Validators.required]),
      AssignedHistoryId: new FormControl(this.routeData.assignedHistoryId, [Validators.required]),
  
    });
  }
  

  ngOnInit(): void {
    this.loadRouteData();
    this.loadAssignmentHistory();
  }

  ngOnDestroy(): void {
    Object.assign(this.routeData, initialRouteState);
  }

    loadRouteData(): void {
    const route = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.routeService.getOne(route).subscribe((data: Partial<Route>) => {
      this.routeDataForm.patchValue(data);
    });
  }

  update(): void {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.routeService
      .updateOne(routeId, this.routeData)
      .subscribe();
    this.router.navigate(['/admin/route']);
  }

  loadAssignmentHistory(): void {
    this.assignmentHistoryService.getAll().subscribe((res: any[]) => {
      this.assignmentHistory = res;
    });
  }

  get routeName() {
    return this.routeDataForm.get('routeName');
  }

  get problemDescription() {
    return this.routeDataForm.get('problemDescription');
  }

  get comments() {
    return this.routeDataForm.get('comments');
  }

  get startLatitude() {
    return this.routeDataForm.get('startLatitude');
  }

  get startLongitude() {
    return this.routeDataForm.get('startLongitude');
  }

  get endLatitude() {
    return this.routeDataForm.get('endLatitude');
  }

  get endLongitude() {
    return this.routeDataForm.get('endLongitude');
  }

  get assignedHistoryId() {
    return this.routeDataForm.get('assignedHistoryId');
  }
}
