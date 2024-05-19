import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Route, RouteRequest } from '../models/route';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Route[]> {
    return this.httpClient.get<Route[]>(
      `${environment().apiURL}/routes`,
      this.httpOptions
    );
  }

  create(route: RouteRequest): Observable<Route> {
    return this.httpClient.post<RouteRequest>(
      `${environment().apiURL}/routes`,
      route,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Route> {
    return this.httpClient.get<Route>(
      `${environment().apiURL}/routes/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, route: Partial<Route>): Observable<Route> {
    return this.httpClient.put<Route>(
      `${environment().apiURL}/routes/${id}`,
      route,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Route> {
    return this.httpClient.delete<Route>(
      `${environment().apiURL}/routes/${id}`,
      this.httpOptions
    );
  }
}
