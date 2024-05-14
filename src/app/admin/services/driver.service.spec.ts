import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { environment } from '../../../environments/environment';
import { DriverService } from './driver.service';
import { Driver } from '../models/driver';
import { DriverRequest } from '../models/driver';

describe('DriverService', () => {
  let driverService: DriverService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/drivers`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    driverService = TestBed.inject(DriverService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(DriverService).toBeTruthy();
  });

  it('#getAll should retrieve all drivers', () => {
    let actualDrivers: Driver[] | undefined;

    const drivers = [
      {
        id: '1',
        firstName: 'prueba',
        lastName: 'prueba',
        birthDate: '01/01/1999',
        licenseNumber: 0,
        curp: 'prueba',
        address: 'prueba',
        monthlysalary: 0,
      },
      {
        id: '1',
        firstName: 'prueba',
        lastName: 'prueba',
        birthDate: '01/01/1999',
        licenseNumber: 0,
        curp: 'prueba',
        address: 'prueba',
        monthlysalary: 0,
      },
    ];

    driverService.getAll().subscribe((data) => {
      actualDrivers = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(drivers);

    expect(actualDrivers).toEqual(drivers);
  });

  it('#create should create a new drivers', () => {
    let actualDrivers: Driver | undefined;

    const newDriver: DriverRequest = {
      firstName: 'prueba',
      lastName: 'prueba',
      birthDate: '01/01/1999',
      licenseNumber: 0,
      curp: 'prueba',
      address: 'prueba',
      monthlysalary: 0,
    };

    driverService.create(newDriver).subscribe((data) => {
      actualDrivers = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 1, ...newDriver });

    expect(actualDrivers).toEqual({ id: 1, ...newDriver });
  });

  it('#getOne should retrieve one driver by id', () => {
    let actualDriver: Driver | undefined;

    const driver = {
      id: '1',
      firstName: 'prueba',
      lastName: 'prueba',
      birthDate: '01/01/1999',
      licenseNumber: 0,
      curp: 'prueba',
      address: 'prueba',
      monthlysalary: 0,
    };

    driverService.getOne(5).subscribe((data) => {
      actualDriver = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(driver);

    expect(actualDriver).toEqual(driver);
  });

  it('#updateOne should update one driver', () => {
    let actualDriver: Driver | undefined;

    let expectedDriver = {
      id: '1',
      firstName: 'prueba',
      lastName: 'prueba',
      birthDate: '01/01/1999',
      licenseNumber: 0,
      curp: 'prueba',
      address: 'prueba',
      monthlysalary: 0,
    };

    const dataToUpdate = {
      firstName: 'Smith',
      lastName: 'Jhonson',
    };

    driverService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualDriver = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedDriver);

    expect(actualDriver).toEqual(expectedDriver);
  });

  it('#delete should remove a driver by id', () => {
    let deletedDriver: Driver | undefined;

    const driver = {
      id: '1',
      firstName: 'prueba',
      lastName: 'prueba',
      birthDate: '01/01/1999',
      licenseNumber: 0,
      curp: 'prueba',
      address: 'prueba',
      monthlysalary: 0,
    };

    driverService.delete(6).subscribe((data) => {
      deletedDriver = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/6`,
    });

    testRequest.flush(driver);

    expect(deletedDriver).toEqual(driver);
  });
});
