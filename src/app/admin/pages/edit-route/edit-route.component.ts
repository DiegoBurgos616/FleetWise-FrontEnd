import { Component, Input } from '@angular/core';
import { RouteService } from '../../services/route.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route, initialRouteState } from '../../models/route';

@Component({
  selector: 'app-edit-route',
  templateUrl: './edit-route.component.html',
})
export class EditRouteComponent {
  @Input() routeEditable: Route = initialRouteState;
  constructor(
    private routeService: RouteService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    if (!isNaN(routeId)) {
      this.routeService.getOne(routeId).subscribe((res) => {
        this.routeEditable = res;
      });
    } else {
      console.error("Invalid route ID:", routeId);
    }
  }

}
