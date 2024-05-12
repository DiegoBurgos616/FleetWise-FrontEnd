import { Component, Input } from '@angular/core';
import { TripRequest, initialTripRequest } from '../../models/trip';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../../services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-form',
  templateUrl: './trip-form.component.html',
})
export class TripFormComponent {
  @Input() tripData: TripRequest = initialTripRequest;

  constructor(private tripService: TripService, private router: Router) {}

  tripDataForm: FormGroup = new FormGroup({
    routeName: new FormControl(this.tripData.routeName, [Validators.required]),
    startDate: new FormControl(this.tripData.startDate, [Validators.required]),
    successful: new FormControl(this.tripData.successful, [Validators.required]),
    comments: new FormControl(this.tripData.comments, [Validators.required]),
    drivers: new FormControl(this.tripData.drivers, [Validators.required]),
    users: new FormControl(this.tripData.users, [Validators.required]),

  });

  ngOnInit(): void {
  }

  create(): void {
    this.tripService.create(this.tripData).subscribe();
    this.router.navigate(['/admin/trips']);
  }

  get routeName() {
    return this.tripDataForm.get('routeName');
  }

  get startDate() {
    return this.tripDataForm.get('startDate');
  }

  get successful() {
    return this.tripDataForm.get('successful');
  }

  get comments() {
    return this.tripDataForm.get('comments');
  }

  get drivers() {
    return this.tripDataForm.get('drivers');
  }

  get users() {
    return this.tripDataForm.get('users');
  }
}
