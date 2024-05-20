import { Component } from '@angular/core';
import { Route } from '../../models/route';
import { RouteService } from '../../services/route.service';
import { AssignmentHistoryService } from 'app/admin/services/assignment-history.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-routes-page',
  templateUrl: './routes-page.component.html',
})
export class RoutesPageComponent {
  routes: Route[] = [];
  assignmentHistory: any[] = [];

  constructor(
    private routeService: RouteService, 
    private assignmentHistoryService: AssignmentHistoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllRoutes();
    this.loadAssignmentHistory();
  }

  getAllRoutes(): void {
    this.routeService.getAll().subscribe((res) => {
      this.routes = res;
    });
  }

  loadAssignmentHistory(): void {
    this.assignmentHistoryService.getAll().subscribe((res: any[]) => {
      this.assignmentHistory = res;
    });
  }


  delete(routeId: number | undefined): void {
    if (routeId) {
      this.routeService
        .delete(routeId)
        .pipe(tap(() => this.getAllRoutes()))
        .subscribe(() => {
          this.router.navigate(['/admin/routes']);
        });
    }
  }
}
