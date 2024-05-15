import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Vehicle, VehicleRequest } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(
      `${environment().apiURL}/vehicles`,
      this.httpOptions
    );
  }

  create(vehicle: VehicleRequest): Observable<Vehicle> {
    return this.httpClient.post<VehicleRequest>(
      `${environment().apiURL}/vehicles`,
      vehicle,
      this.httpOptions
    );
  }

  getOne(id: number): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(
      `${environment().apiURL}/vehicles/${id}`,
      this.httpOptions
    );
  }

  updateOne(id: number, vehicle: Partial<Vehicle>): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>(
      `${environment().apiURL}/vehicles/${id}`,
      vehicle,
      this.httpOptions
    );
  }

  delete(id: number): Observable<Vehicle> {
    return this.httpClient.delete<Vehicle>(
      `${environment().apiURL}/vehicles/${id}`,
      this.httpOptions
    );
  }

  
}
