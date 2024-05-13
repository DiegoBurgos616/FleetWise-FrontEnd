import { Component, Input } from '@angular/core';
import { Route, initialRouteState } from '../../models/route';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../services/route.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
})
export class RouteDetailComponent {
  @Input() routeData: Partial<Route> = initialRouteState;

  constructor(
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  routeDataForm: FormGroup = new FormGroup({
    routeName: new FormControl(this.routeData.routeName, [Validators.required]),
    problemDescription: new FormControl(this.routeData.problemDescription, [Validators.required]),
    comments: new FormControl(this.routeData.comments, [Validators.required]),
    startLatitude: new FormControl(this.routeData.startLatitude, [Validators.required]),
    startLongitude: new FormControl(this.routeData.startLongitude, [Validators.required]),
    endLatitude: new FormControl(this.routeData.endLatitude, [Validators.required]),
    endLongitude: new FormControl(this.routeData.endLongitude, [Validators.required]),
    AssignedHistoryId: new FormControl(this.routeData.assignedHistoryId, [Validators.required]),

  });


  

  ngOnInit(): void {
    Object.assign(this.routeData, initialRouteState);
  }

  ngOnDestroy(): void {
    Object.assign(this.routeData, initialRouteState);
  }

  update(): void {
    const routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.routeService
      .updateOne(routeId, this.routeData)
      .subscribe();
    this.router.navigate(['/admin/route']);
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

  get startLAtitude() {
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
