
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import * as fromState from '../../state';
import { LoadSurveys } from '../../state/actions';
import { Survey } from '../../models/survey.model';
import { SurveyService } from 'src/app/survey/survey.service';


@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
})
export class SurveyListComponent implements OnInit {
  surveyList: Survey[];
  isSurveyHomePage: boolean;
  survey: Survey;

  constructor(
    private readonly router: Router,
    private readonly surveyService: SurveyService,
    private readonly store: Store<fromState.State>) { }

  ngOnInit() {
    this.store.dispatch(new LoadSurveys());
    this.store.pipe(select(fromState.getSurveys)).subscribe(surveys => this.surveyList = surveys);

  }

  startSurvey(surveyId) {
    const survey = this.surveyList.find(x => x.id === parseInt(surveyId, 10));
    this.survey = { ...survey };
    this.surveyService.setSurvey(this.survey);
    this.router.navigate([`/surveys/start-survey`]);
  }
}
