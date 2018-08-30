import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { Injectable } from '@angular/core';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

export const FILTER_COURSES = 'courses/FILTER';
export const REQUEST_COURSES = 'courses/REQUEST_COURSES';
export const REQUEST_COURSES_SUCCESS = 'courses/REQUEST_COURSES_SUCCESS';
export const GET_COURSE = 'courses/GET_COURSE';

@Injectable()
export class CourseActions {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private courseService: CourseService,
    private router: Router
  ) {}

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.ngRedux.dispatch({
        type: REQUEST_COURSES_SUCCESS,
        courses
      });
    });
  }

  getCourse(id: number) {
    this.ngRedux.dispatch({
      type: GET_COURSE,
      id
    });
  }

  filterCourses(searchText: string) {
    this.ngRedux.dispatch({
      type: FILTER_COURSES,
      searchText
    });
  }
}
