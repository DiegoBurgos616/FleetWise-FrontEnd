import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Driver, DriverRequest } from '../models/driver';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Driver[]> {
    return this.httpClient.get<Driver[]>(
      `${environment().apiURL}/drivers`,
      this.getHttpOptions()
    );
  }

  create(driver: DriverRequest): Observable<Driver> {
    return this.httpClient.post<Driver>(
      `${environment().apiURL}/drivers`,
      driver,
      this.getHttpOptions()
    );
  }

  getOne(id: number): Observable<Driver> {
    return this.httpClient.get<Driver>(
      `${environment().apiURL}/drivers/${id}`,
      this.getHttpOptions()
    );
  }

  updateOne(id: number, driver: Partial<Driver>): Observable<Driver> {
    return this.httpClient.put<Driver>(
      `${environment().apiURL}/drivers/${id}`,
      driver,
      this.getHttpOptions()
    );
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${environment().apiURL}/drivers/${id}`,
      this.getHttpOptions()
    );
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
  }
}
