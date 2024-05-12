import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

import { TripService } from './trip.service';
import { Trip, TripRequest } from '../models/trip';

describe('TripService', () => {
  let tripService: TripService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/trips`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    tripService = TestBed.inject(TripService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(TripService).toBeTruthy();
  });

  it('#getAll should retrieve all trips', () => {
    let actualTrip: Trip[] | undefined;

    const trips = [
      {
        id: '2',
        routeName: 'prueba',
        startDate: 'prueba',
        endDate: 'prueba',
        successful: false,
        problemDescription: 'prueba',
        comments: 'prueba',
        drivers: [],
        users: [],
      },
      {
        id: '2',
        routeName: 'prueba',
        startDate: 'prueba',
        endDate: 'prueba',
        successful: false,
        problemDescription: 'prueba',
        comments: 'prueba',
        drivers: [],
        users: [],
      },
    ];

    tripService.getAll().subscribe((data) => {
      actualTrip = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(trips);

    expect(actualTrip).toEqual(trips);
  });

  it('#create should create a new trip', () => {
    let actualTrip: Trip | undefined;

    const newTrip: TripRequest = {
      routeName: 'prueba',
      startDate: 'prueba',
      endDate: 'prueba',
      successful: false,
      problemDescription: 'prueba',
      comments: 'prueba',
      drivers: [],
      users: [],
    };

    tripService.create(newTrip).subscribe((data) => {
      actualTrip = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 7, ...newTrip });

    expect(actualTrip).toEqual({ id: 7, ...newTrip });
  });

  it('#getOne should retrieve one trip by id', () => {
    let actualTrip: Trip | undefined;

    const trip = {
      id: '2',
      routeName: 'prueba',
      startDate: 'prueba',
      endDate: 'prueba',
      successful: false,
      problemDescription: 'prueba',
      comments: 'prueba',
      drivers: [],
      users: [],
    };

    tripService.getOne(5).subscribe((data) => {
      actualTrip = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(trip);

    expect(actualTrip).toEqual(trip);
  });

  it('#updateOne should update one ', () => {
    let actualTrip: Trip | undefined;

    let expectedTrip = {
      id: '2',
      routeName: 'prueba',
      startDate: 'prueba',
      endDate: 'prueba',
      successful: false,
      problemDescription: 'prueba',
      comments: 'prueba',
      drivers: [],
      users: [],
    };

    const dataToUpdate = {
      id: '2',
      routeName: 'prueba',
      startDate: 'prueba',
      endDate: 'prueba',
      successful: false,
      problemDescription: 'prueba',
      comments: 'prueba',
      drivers: [],
      users: [],
    };

    tripService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualTrip = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedTrip);

    expect(actualTrip).toEqual(expectedTrip);
  });

  it('#delete should remove a trip by id', () => {
    let deletedTrip: Trip | undefined;

    const trip = {
      routeName: 'prueba',
      startDate: 'prueba',
      endDate: 'prueba',
      successful: false,
      problemDescription: 'prueba',
      comments: 'prueba',
      drivers: [],
      users: [],
    };

    tripService.delete(6).subscribe((data) => {
      deletedTrip = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(trip);

    expect(deletedTrip).toEqual(trip);
  });
});
