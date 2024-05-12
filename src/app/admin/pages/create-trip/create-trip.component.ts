import { Component, Input } from '@angular/core';
import { TripRequest, initialTripRequest } from '../../models/trip';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
})
export class CreateTripComponent {
  @Input() initialTrip: TripRequest = initialTripRequest;
  constructor(
  ) {}

  ngOnInit(): void {
  }
}
