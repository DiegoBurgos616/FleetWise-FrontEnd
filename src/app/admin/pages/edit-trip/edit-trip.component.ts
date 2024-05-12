import { Component, Input } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip, initialTripState } from '../../models/trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
})
export class EditTripComponent {
  @Input() tripEditable: Trip = initialTripState;
  constructor(
    private tripService: TripService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const tripId = Number(this.activedRoute.snapshot.paramMap.get('id'));
    this.tripService.getOne(tripId).subscribe((res) => {
      this.tripEditable = res;
    });
  }

}
