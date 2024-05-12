import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { UserRequest } from '../models/user';

describe('UserService', () => {
  let userService: UserService;
  let httpMock: HttpTestingController;
  let URL = `${environment().apiURL}/users`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    userService = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterAll(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(UserService).toBeTruthy();
  });

  it('#getAll should retrieve all users', () => {
    let actualUsers: User[] | undefined;

    const users = [
      {
        id: '',
        email: '',
        password: '',
        invitationCode: '',
      },
      {
        id: '',
        email: '',
        password: '',
        invitationCode: '',
      },
    ];

    userService.getAll().subscribe((data) => {
      actualUsers = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: URL,
    });

    testRequest.flush(users);

    expect(actualUsers).toEqual(users);
  });

  it('#create should create a new user', () => {
    let actualUser: User | undefined;

    const newUser: UserRequest = {
      email: '',
      password: '',
      invitationCode: '',
    };

    userService.create(newUser).subscribe((data) => {
      actualUser = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'POST',
      url: URL,
    });

    testRequest.flush({ id: 1, ...newUser });

    expect(actualUser).toEqual({ id: 1, ...newUser });
  });

  it('#getOne should retrieve one user by id', () => {
    let actualUser: User | undefined;

    const user = {
      id: '',
      email: '',
      password: '',
      invitationCode: '',
    };

    userService.getOne(5).subscribe((data) => {
      actualUser = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'GET',
      url: `${URL}/5`,
    });

    testRequest.flush(user);

    expect(actualUser).toEqual(user);
  });

  it('#updateOne should update one user', () => {
    let actualUser: User | undefined;

    let expectedUser = {
      id: '',
      email: '',
      password: '',
      invitationCode: '',
    };

    const dataToUpdate = {
      email: '',
      password: '',
      invitationCode: '',
    };

    userService.updateOne(6, dataToUpdate).subscribe((data) => {
      actualUser = data;
    });

    const testRequest = httpMock.expectOne({ method: 'PUT', url: `${URL}/6` });

    testRequest.flush(expectedUser);

    expect(actualUser).toEqual(expectedUser);
  });

  it('#delete should remove a user by id', () => {
    let deletedUser: User | undefined;

    const user = {
      id: '',
      email: '',
      password: '',
      invitationCode: '',
    };

    userService.delete(2).subscribe((data) => {
      deletedUser = data;
    });

    const testRequest = httpMock.expectOne({
      method: 'DELETE',
      url: `${URL}/2`,
    });

    testRequest.flush(user);

    expect(deletedUser).toEqual(user);
  });
});
