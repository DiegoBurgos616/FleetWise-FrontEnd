import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Trip, TripRequest } from '../models/trip';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(
      `${environment().apiURL}/trips`,
      this.httpOptions
    );
  }

  create(trip: TripRequest): Observable<Trip> {
    return this.httpClient.post<TripRequest>(
      `${environment().apiURL}/trips`,
      trip,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Trip> {
    return this.httpClient.get<Trip>(
      `${environment().apiURL}/trips/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, trip: Partial<Trip>): Observable<Trip> {
    return this.httpClient.put<Trip>(
      `${environment().apiURL}/trips/${id}`,
      trip,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Trip> {
    return this.httpClient.delete<Trip>(
      `${environment().apiURL}/trips/${id}`,
      this.httpOptions
    );
  }
}
