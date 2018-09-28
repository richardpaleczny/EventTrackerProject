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

  handleError(error: any) {
    console.error('Something Broke');
    console.log(error);
    return throwError(error.json().error || 'Server Error');
  }

  constructor(private http: HttpClient) {}
}
