import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BaseUser, LoginRequest, LoginResponse, User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  register(user: User): Observable<BaseUser> {
    return this.httpClient.post<User>(`${environment().apiURL}/register`, user);
  }

  login(user: LoginRequest): Observable<LoginResponse> {
    return this.httpClient
      .post<LoginResponse>(
        `${environment().apiURL}/login`,
        user,
        this.httpOptions
      )
      .pipe(
        tap((res: LoginResponse) => localStorage.setItem('token', res.token))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
