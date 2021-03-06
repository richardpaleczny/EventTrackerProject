import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HealthyHabits } from './models/healthy-habits';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthyHabitsService {
  // ****************************************************************
  // FIELDS

  private baseUrl = environment.baseUrl;

  private uriPath = 'api/healthyhabits';

  private url = environment.baseUrl + this.uriPath;

  // ****************************************************************
  // METHODS

  index(): Observable<HealthyHabits[]> {
    return this.http
      .get<HealthyHabits[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  show(id): Observable<HealthyHabits> {
    return this.http
      .get<HealthyHabits>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  create(healthyHabits: HealthyHabits): Observable<HealthyHabits> {
    return this.http
      .post<HealthyHabits>(this.url, healthyHabits)
      .pipe(catchError(this.handleError));
  }

  update(healthyHabits: HealthyHabits) {
    return this.http
      .put(`${this.url}/${healthyHabits.id}`, healthyHabits)
      .pipe(catchError(this.handleError));
  }

  destroy(id) {
    return this.http
      .delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    console.error('Something Broke');
    console.log(error);
    return throwError(error.json().error || 'Server Error');
  }

  // ****************************************************************
  // HELPERS

  constructor(private http: HttpClient) {}
}
