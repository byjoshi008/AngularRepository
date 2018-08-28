import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CONFIG } from '../shared';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Course } from './course';
import { SpinnerService } from '../blocks/spinner';
import { ExceptionService } from '../blocks/exception.service';

// import { /* ExceptionService, */ SpinnerService } from '../blocks/blocks';
// import { CONFIG, MessageService } from '../shared/shared';

const coursesUrl = CONFIG.baseUrls.courses;

@Injectable()
export class CourseService {
  constructor(
    private _http: Http,
    private _spinnerService: SpinnerService,
    private _exceptionService: ExceptionService
  ) {}

  addCourse(course: Course) {
    const body = JSON.stringify(course);
    this._spinnerService.show();
    return this._http.post(`${coursesUrl}`, body).pipe(
      map((res: Response) => {
        this._spinnerService.hide();
        return res.json();
      }),
      catchError(error => {
        this._spinnerService.hide();
        return this._exceptionService.catchBadResponse(error);
      })
    );
  }

  deleteCourse(course: Course) {
    this._spinnerService.show();
    return this._http.delete(`${coursesUrl}/${course.id}`).pipe(
      tap(res => {
        this._spinnerService.hide();
      }),
      catchError(error => {
        this._spinnerService.hide();
        return this._exceptionService.catchBadResponse(error);
      })
    );
  }

  getCourses() {
    this._spinnerService.show();

    return this._http.get('/api/courses').pipe(
      map((response: Response) => {
        this._spinnerService.hide();
        console.log(response);
        return <Course[]>response.json();
      })
    );
  }

  getCourse(id: number) {
    this._spinnerService.show();
    return this._http.get(`${coursesUrl}/${id}`).pipe(
      map((response: any) => {
        this._spinnerService.hide();
        return response._body;
      })
    );
  }

  updateCourse(course: Course) {
    const body = JSON.stringify(course);
    this._spinnerService.show();

    return this._http.put(`${coursesUrl}/${course.id}`, body);
  }
}
