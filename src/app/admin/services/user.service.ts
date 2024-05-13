import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, UserRequest } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${environment().apiURL}/users`,
      this.httpOptions
    );
  }

  create(user: UserRequest): Observable<User> {
    return this.httpClient.post<UserRequest>(
      `${environment().apiURL}/users`,
      user,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<User> {
    return this.httpClient.get<User>(
      `${environment().apiURL}/users/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, user: Partial<User>): Observable<User> {
    return this.httpClient.put<User>(
      `${environment().apiURL}/users/${id}`,
      user,
      this.httpOptions
    );
  }

  delete(id: number): Observable<User> {
    return this.httpClient.delete<User>(
      `${environment().apiURL}/users/${id}`,
      this.httpOptions
    );
  }
}
