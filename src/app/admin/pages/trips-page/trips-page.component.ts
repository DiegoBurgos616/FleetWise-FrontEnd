import { Component } from '@angular/core';
import { Trip } from '../../models/trip';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips-page.component.html',
})
export class TripsPageComponent {
  trips: Trip[] = [];

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.getAllTrips();
  }

  getAllTrips(): void {
    this.tripService.getAll().subscribe((res) => {
      this.trips = res;
    });
  }

  delete(tripId?: string): void {
    const id = Number(tripId);
    this.tripService
      .delete(id)
      .pipe(tap(() => this.router.navigate(['/admin/trips'])))
      .subscribe((res) => this.getAllTrips());
  }
}
