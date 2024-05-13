import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';

import { RouteService } from './route.service';
import { Route, RouteRequest } from '../models/route';

describe('RouteService', () => {
  let routeService: RouteService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/routes`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    routeService = TestBed.inject(RouteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(RouteService).toBeTruthy();
  });

  it('#getAll should retrieve all trips', () => {
    let actualRoute: Route[] | undefined;

    const routes = [
      {
        id: '2',
        routeName: 'prueba',
        problemDescription: 'prueba',
        comments: 'prueba',
        startLatitude: 0,
        startLongitude: 0,
        endLatitude: 0,
        endLongitude: 0,
        assignedHistoryId: 0,
      },
      {
        id: '2',
        routeName: 'prueba',
        problemDescription: 'prueba',
        comments: 'prueba',
        startLatitude: 0,
        startLongitude: 0,
        endLatitude: 0,
        endLongitude: 0,
        assignedHistoryId: 0,
      },
    ];

    routeService.getAll().subscribe((data) => {
      actualRoute = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(routes);

    expect(actualRoute).toEqual(routes);
  });

  it('#create should create a new trip', () => {
    let actualRoute: Route | undefined;

    const newRoute: RouteRequest = {
      routeName: 'prueba',
      problemDescription: 'prueba',
      comments: 'prueba',
      startLatitude: 0,
      startLongitude: 0,
      endLatitude: 0,
      endLongitude: 0,
      assignedHistoryId: 0,
    };

    routeService.create(newRoute).subscribe((data) => {
      actualRoute = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 7, ...newRoute });

    expect(actualRoute).toEqual({ id: 7, ...newRoute });
  });

  it('#getOne should retrieve one trip by id', () => {
    let actualRoute: Route | undefined;

    const routes = {
      id: '2',
      routeName: 'prueba',
      problemDescription: 'prueba',
      comments: 'prueba',
      startLatitude: 0,
      startLongitude: 0,
      endLatitude: 0,
      endLongitude: 0,
      assignedHistoryId: 0,
    };

    routeService.getOne(5).subscribe((data) => {
      actualRoute = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(routes);

    expect(actualRoute).toEqual(routes);
  });

  it('#updateOne should update one ', () => {
    let actualRoute: Route | undefined;

    let expectedRoute = {
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

    routeService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualRoute = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedRoute);

    expect(actualRoute).toEqual(expectedRoute);
  });

  it('#delete should remove a trip by id', () => {
    let deletedRoute: Route | undefined;

    const route = {
      routeName: 'prueba',
      startDate: 'prueba',
      endDate: 'prueba',
      successful: false,
      problemDescription: 'prueba',
      comments: 'prueba',
      drivers: [],
      users: [],
    };

    routeService.delete(6).subscribe((data) => {
      deletedRoute = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(route);

    expect(deletedRoute).toEqual(route);
  });
});
