import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';
import { VehicleService } from './vehicle.service';
import { Vehicle } from '../models/vehicle';
import { VehicleRequest } from '../models/vehicle';

describe('VehicleService', () => {
  let vehicleService: VehicleService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/vehicles`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    vehicleService = TestBed.inject(VehicleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(VehicleService).toBeTruthy();
  });

  it('#getAll should retrieve all vehicles', () => {
    let actualVehicles: Vehicle[] | undefined;

    const vehicles = [
      {
        id: 1,
        brand: 'Chevrolet',
        model: 'Camaro',
        vin: '12345678901234567',
        plate: "ABC-123",
        purchasedDate: '01/02/2015',
        cost: 0,
        photoUrl: '',
      },
      {
        id: 2,
        brand: 'Chevrolet',
        model: 'Camaro',
        vin: '12345678901234567',
        plate: "ABC-123",
        purchasedDate: '01/02/2015',
        cost: 0,
        photoUrl: '',
      },
    ];

    vehicleService.getAll().subscribe((data) => {
      actualVehicles = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(vehicles);

    expect(actualVehicles).toEqual(vehicles);
  });

  it('#create should create a new vehicle', () => {
    let actualVehicle: Vehicle | undefined;

    const newVehicle: VehicleRequest = {
      brand: '',
      model: '',
      vin: '',
      plate: '',
      purchasedDate: '',
      cost: 0,
      photoUrl: '',
    };

    vehicleService.create(newVehicle).subscribe((data) => {
      actualVehicle = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 1, ...newVehicle });

    expect(actualVehicle).toEqual({ id: 1, ...newVehicle });
  });

  it('#getOne should retrieve one vehicle by id', () => {
    let actualVehicle: Vehicle | undefined;

    const vehicle = {
      id: 5,
      brand: 'Chevrolet',
      model: 'Camaro',
      vin: '12345678901234567',
      plate: "ABC-123",
      purchasedDate: '01/02/2015',
      cost: 0,
      photoUrl: '',
    };

    vehicleService.getOne(5).subscribe((data) => {
      actualVehicle = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(vehicle);

    expect(actualVehicle).toEqual(vehicle);
  });

  it('#updateOne should update one vehicle', () => {
    let actualVehicle: Vehicle | undefined;

    let expectedVehicle = {
      id: 6,
      brand: 'Chevrolet',
      model: 'Camaro',
      vin: '12345678901234567',
      plate: "ABC-123",
      purchasedDate: '01/02/2015',
      cost: 0,
      photoUrl: '',
    };

    const dataToUpdate = {
      brand: '',
      model: '',
      vin: '',
      plate: '',
      purchaseDate: '',
      cost: 0,
      photoUrl: '',
    };

    vehicleService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualVehicle = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedVehicle);

    expect(actualVehicle).toEqual(expectedVehicle);
  });

  it('#delete should remove a vehicle by id', () => {
    let deletedVehicle: Vehicle | undefined;

    const vehicle = {
      id: 6,
      brand: 'Chevrolet',
      model: 'Camaro',
      vin: '12345678901234567',
      plate: "ABC-123",
      purchasedDate: '01/02/2015',
      cost: 0,
      photoUrl: '',
    };

    vehicleService.delete(6).subscribe((data) => {
      deletedVehicle = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(vehicle);

    expect(deletedVehicle).toEqual(vehicle);
  });
});
