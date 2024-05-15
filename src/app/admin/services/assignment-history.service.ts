import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AssignmentHistory } from '../models/assignment-history';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AssignmentHistoryService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<AssignmentHistory[]> {
    return this.httpClient.get<AssignmentHistory[]>(
      `${environment().apiURL}/assignment-history`,
      this.getHttpOptions()
    );
  }

  create(assignmentHistory: AssignmentHistory): Observable<AssignmentHistory> {
    return this.httpClient.post<AssignmentHistory>(
      `${environment().apiURL}/assignment-history`,
      assignmentHistory,
      this.getHttpOptions()
    );
  }

  getOne(id: number): Observable<AssignmentHistory> {
    return this.httpClient.get<AssignmentHistory>(
      `${environment().apiURL}/assignment-history/${id}`,
      this.getHttpOptions()
    );
  }

  updateOne(id: number, assignmentHistory: Partial<AssignmentHistory>): Observable<AssignmentHistory> {
    return this.httpClient.put<AssignmentHistory>(
      `${environment().apiURL}/assignment-history/${id}`,
      assignmentHistory,
      this.getHttpOptions()
    );
  }

  delete(id: number): Observable<AssignmentHistory> {
    return this.httpClient.delete<AssignmentHistory>(
      `${environment().apiURL}/assignment-history/${id}`,
      this.getHttpOptions()
    );
  }

  // Define el método para obtener el historial de asignación por su ID
  getAssignmentHistoryById(id: number): Observable<AssignmentHistory> {
    return this.httpClient.get<AssignmentHistory>(
      `${environment().apiURL}/assignment-history/${id}`,
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
