import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { CourseActions } from './course.action';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses')
  filteredCourses: Observable<Course>;

  constructor(private courseActions: CourseActions) {}

  filterChanged(searchText: string) {
    this.courseActions.filterCourses(searchText);
  }

  ngOnInit() {
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}
