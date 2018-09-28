import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Survey } from '../models/survey.model';

@Injectable()
export class SurveyService {
    private serviceUrl = 'api/surveys';
    constructor(private http: HttpClient) { }

    createSurvey(survey: Survey) {
        return this.http
            .post<Survey>(this.serviceUrl, { ...survey, id: null }, this.getHeaders())
            .pipe(
                tap(data => console.log('created Survey: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    updateSurvey(survey: Survey) {
        const url = `${this.serviceUrl}/${survey.id}`;
        return this.http.put<Survey>(url, survey, this.getHeaders()).pipe(
            tap(() => console.log('updated survey: ' + survey.id)),
            map(() => survey),
            catchError(this.handleError)
        );
    }

    getSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.serviceUrl).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError));
    }

    getSurvey(surveyid: any): Observable<Survey> {
        const url = `${this.serviceUrl}/${surveyid}`;
        return this.http.get<Survey>(url).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError));
    }

    private getHeaders() {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return { headers: headers };
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
