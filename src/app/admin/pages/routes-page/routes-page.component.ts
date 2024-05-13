import { Component } from '@angular/core';
import { Route } from '../../models/route';
import { RouteService } from '../../services/route.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-routes-page',
  templateUrl: './routes-page.component.html',
})
export class RoutesPageComponent {
  routes: Route[] = [];

  constructor(private routeService: RouteService, private router: Router) {}

  ngOnInit(): void {
    this.getAllRoutes();
  }

  getAllRoutes(): void {
    this.routeService.getAll().subscribe((res) => {
      this.routes = res;
    });
  }

  delete(routeId?: string): void {
    const id = Number(routeId);
    this.routeService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/routes'])))
      .subscribe((res) => this.getAllRoutes());
  }
}
