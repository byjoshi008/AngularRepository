import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Survey } from '../models/survey.model';

@Injectable()
export class SurveyService {
    private serviceUrl = 'api/surveys';
    constructor(private http: HttpClient) { }

    getSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.serviceUrl).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError));
    }

    private handleError(err) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else if (err.error instanceof HttpErrorResponse) {
            errorMessage = `An error occurred: ${err.status}: ${err.message}`;
        } else {
            errorMessage = `Backend returned code ${err.status}: ${err.message ? err.message : ''}`;
        }
        console.log(err);
        return throwError(errorMessage);
    }
}
