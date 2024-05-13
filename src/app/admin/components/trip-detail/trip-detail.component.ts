import { Component, Input } from '@angular/core';
import { Trip, initialTripState } from '../../models/trip';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TripService } from '../../services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
})
export class TripDetailComponent {
  @Input() tripData: Partial<Trip> = initialTripState;

  constructor(
    private tripService: TripService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  tripDataForm: FormGroup = new FormGroup({
    routeName: new FormControl(this.tripData.routeName, [Validators.required]),
    startDate: new FormControl(this.tripData.startDate, [Validators.required]),
    successful: new FormControl(this.tripData.successful, [Validators.required]),
    comments: new FormControl(this.tripData.comments, [Validators.required]),
    drivers: new FormControl(this.tripData.drivers, [Validators.required]),
    users: new FormControl(this.tripData.users, [Validators.required]),

  });


  

  ngOnInit(): void {
    Object.assign(this.tripData, initialTripState);
  }

  ngOnDestroy(): void {
    Object.assign(this.tripData, initialTripState);
  }

  update(): void {
    const tripId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.tripService
      .updateOne(tripId, this.tripData)
      .subscribe();
    this.router.navigate(['/admin/trips']);
  }

  get routeName() {
    return this.tripDataForm.get('routeName');
  }

  get startDate() {
    return this.tripDataForm.get('startDate');
  }

  get endDate() {
    return this.tripDataForm.get('endDate');
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
