import { Component, Input } from '@angular/core';
import { RouteRequest, initialRouteRequest } from '../../models/route';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-form',
  templateUrl: './route-form.component.html',
})
export class RouteFormComponent {
  @Input() routeData: RouteRequest = initialRouteRequest;

  constructor(private routeService: RouteService, private router: Router) {}

  routeDataForm: FormGroup = new FormGroup({
    routeName: new FormControl(this.routeData.routeName, [Validators.required]),
    problemDescription: new FormControl(this.routeData.problemDescription, [Validators.required]),
    comments: new FormControl(this.routeData.comments, [Validators.required]),
    startLatitude: new FormControl(this.routeData.startLatitude, [Validators.required]),
    startLongitude: new FormControl(this.routeData.startLongitude, [Validators.required]),
    endLatitude: new FormControl(this.routeData.endLatitude, [Validators.required]),
    endLongitude: new FormControl(this.routeData.endLongitude, [Validators.required]),
    assignedHistoryId: new FormControl(this.routeData.assignedHistoryId, [Validators.required]),

  });

  ngOnInit(): void {
  }

  create(): void {
    this.routeService.create(this.routeData).subscribe();
    this.router.navigate(['/admin/route']);
  }

  get routeName() {
    return this.routeDataForm.get('routeName');
  }

  get startDate() {
    return this.routeDataForm.get('startDate');
  }

  get successful() {
    return this.routeDataForm.get('successful');
  }

  get comments() {
    return this.routeDataForm.get('comments');
  }

  get drivers() {
    return this.routeDataForm.get('drivers');
  }

  get users() {
    return this.routeDataForm.get('users');
  }
}
