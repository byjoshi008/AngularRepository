import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '../blocks/toast';
import { ModalService } from '../blocks/modal';
import { CourseActions } from './course.action';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './course.component.html'
})
export class CourseComponent implements OnInit, AfterContentChecked {
  @select('selectedCourse')
  course$: Observable<Course>;

  editedCourse: Course;

  constructor(
    private _courseService: CourseService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastService: ToastService,
    private _modalService: ModalService,
    private _courseActions: CourseActions
  ) {}

  cancel(showToast = true) {
    if (showToast) {
      this._toastService.activate(
        `Cancelled changes to ${this.editedCourse.name}`
      );
    }
    this._gotoCourses();
  }

  save() {
    if (this.editedCourse.id == null) {
      this._courseService.addCourse(this.editedCourse).subscribe(char => {
        this._toastService.activate(`Successfully added ${char.name}`);
        this._gotoCourses();
      });
      return;
    }
    this._courseService.updateCourse(this.editedCourse).subscribe(() => {
      this._toastService.activate(
        `Successfully saved ${this.editedCourse.name}`
      );
      this._gotoCourses();
    });
  }

  delete() {
    const msg = `Do you want to delete ${this.editedCourse.name}?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.cancel(false);
        this._courseService.deleteCourse(this.editedCourse).subscribe(() => {
          this._toastService.activate(`Deleted ${this.editedCourse.name}`);
          this._gotoCourses();
        });
      }
    });
  }

  private _gotoCourses() {
    this._router.navigate(['courses']);
  }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
    this._courseActions.getCourse(id);
    this.course$.subscribe(course => {
      if (course) {
        this.editedCourse = Object.assign({}, course);
      } else {
        this._gotoCourses();
      }
    });
  }

  ngAfterContentChecked() {
    componentHandler.upgradeDom();
  }
}
