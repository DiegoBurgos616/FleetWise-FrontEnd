import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(AuthService).toBeTruthy();
  });

  it('should return token after user login', () => {
    const expectedResponse = {
      token: 'generated-token',
    };

    const responseToken = {
      token: 'generated-token',
    };

    authService
      .login({ email: 'example@mail.com', password: 'strongPassword' })
      .subscribe((res) => {
        expect(res).toEqual(expectedResponse);
      });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${environment().apiURL}/login`,
    });

    req.flush(responseToken);
  });

  it('should create a new user', () => {
    const expectedResponse = {
      username: 'john',
      email: 'john@example.com',
    };

    const responseUser = {
      username: 'john',
      email: 'john@example.com',
    };

    authService
      .register({
        username: 'john',
        email: 'example@mail.com',
        password: 'strongPassword',
      })
      .subscribe((res) => {
        expect(res).toEqual(expectedResponse);
      });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${environment().apiURL}/register`,
    });

    req.flush(responseUser);
  });
});
