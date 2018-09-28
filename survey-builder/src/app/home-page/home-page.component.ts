import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromState from '../state';
import { LoadSurveys } from '../state/actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isHomePage = true;
  surveyList: any;
  // [
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   },
  //   {
  //     name: 'Survey 1',
  //     last_updated: '13-Sep-2018 10:40',
  //     last_updated_by: 'Bhargav Joshi'
  //   }
  // ];
  constructor(
    private readonly router: Router,
    private readonly store: Store<fromState.State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadSurveys());
    this.store.pipe(select(fromState.getSurveys)).subscribe(surveys => this.surveyList = surveys);
  }

  gotoEditSurvey(surveyid: string) {
    this.router.navigate(['/edit-survey', surveyid]);
  }

}
