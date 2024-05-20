import { Component, Input, OnInit } from '@angular/core';
import { Route, initialRouteState } from '../../models/route';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../services/route.service';
import { AssignmentHistoryService } from '../../services/assignment-history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
})
export class RouteDetailComponent implements OnInit{
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
      assignedHistoryId: new FormControl(null, [Validators.required]),
  
    });
  }
  

  ngOnInit(): void {
    this.loadRouteData();
    this.loadAssignmentHistory();
  }

  loadRouteData(): void {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (routeId) {
      this.routeService.getOne(routeId).subscribe((data: Partial<Route>) => {
        this.routeDataForm.patchValue(data);
      });
    } else {
      this.routeDataForm.patchValue(this.routeData);
    }
  }

  save(): void {
    if (this.routeDataForm.valid) {
      const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      if (routeId) {
        this.update();
      } else {
        this.create();
      }
    }
  }

  create(): void {
    this.routeService.create(this.routeDataForm.value).subscribe(() => {
      console.log(this.routeDataForm.value);
      this.router.navigate(['/admin/routes']);
    });
  }

  update(): void {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.routeDataForm.value);
    this.routeService.updateOne(routeId, this.routeDataForm.value).subscribe(() => {
      this.router.navigate(['/admin/routes']);
    });
  }

  loadAssignmentHistory(): void {
    this.assignmentHistoryService.getAll().subscribe((res: any[]) => {
      this.assignmentHistory = res;
    });
  }
}
