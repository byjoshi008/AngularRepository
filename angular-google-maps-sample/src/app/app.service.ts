import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ISupplyEvent } from './models/event.models';

@Injectable()
export class AppService {
  private serviceUrl = 'api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<ISupplyEvent[]> {
    return this.http
      .get<ISupplyEvent[]>(this.serviceUrl)
      .pipe(catchError(this.handleError));
  }

  updateSupplyLocation(event: ISupplyEvent): Observable<any> {
    const url = `${this.serviceUrl}/${event.id}`;
    return this.http.put<ISupplyEvent>(
      url, event, { headers: this.getHeader() })
      .pipe(
        map(() => event),
        catchError(this.handleError)
      );
  }

  private getHeader(): HttpHeaders {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return headers;
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
