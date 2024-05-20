import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Route, RouteRequest } from '../models/route';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Route[]> {
    return this.httpClient.get<Route[]>(
      `${environment().apiURL}/routes`,
      this.getHttpOptions()
    );
  }

  create(route: RouteRequest): Observable<Route> {
    return this.httpClient.post<RouteRequest>(
      `${environment().apiURL}/routes`,
      route,
      this.getHttpOptions()
    );
  }

  getOne(id: number): Observable<Route> {
    return this.httpClient.get<Route>(
      `${environment().apiURL}/routes/${id}`,

      this.getHttpOptions()



    );
  }

  updateOne(id: number, routes: Partial<Route>): Observable<Route> {
    return this.httpClient.put<Route>(
      `${environment().apiURL}/routes/${id}`,
      routes,
      this.getHttpOptions()
    );
  }

  delete(id: number): Observable<Route> {
    return this.httpClient.delete<Route>(
      `${environment().apiURL}/routes/${id}`,
      this.getHttpOptions()
    );
  }
}
