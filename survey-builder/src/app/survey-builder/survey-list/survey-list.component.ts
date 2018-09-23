import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromActions from '../state/actions/survey.actions';
import * as fromState from '../state/survey.state';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveyList: any;
  constructor(
    private readonly store: Store<fromState.State>,
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(new fromActions.LoadSurveys());

    this.store.pipe(select(fromState.getSurveys)).subscribe(surveyList => {
      this.surveyList = surveyList;
    });
  }

  gotoEditSurvey(surveyid: string) {
    this.router.navigate(['./edit-survey', surveyid], { relativeTo: this.route });
  }
}
