import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as fromState from '../../state';
import { LoadSurveys, SaveSurvey } from '../../state/actions';
import { Survey } from '../../models/survey.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.css']
})
export class SurveyEditorComponent implements OnInit {
  surveyList: Survey[];
  isEditorHomePage: boolean;
  survey: Survey;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly location: Location,
    private readonly store: Store<fromState.State>) { }

  ngOnInit() {

    if (this.router.url.includes('survey-editor')) {
      this.store.dispatch(new LoadSurveys());
      this.store.pipe(select(fromState.getSurveys)).subscribe(surveys => this.surveyList = surveys);
      this.isEditorHomePage = true;
    } else {
      const surveyId = this.route.snapshot.params['surveyid'];
      this.isEditorHomePage = false;
      if (surveyId) {
        if (surveyId === 'new') {
          this.survey = {
            id: 0,
            name: '',
            description: '',
            sections: [],
            is_complete: false
          };
        } else {
          this.store.pipe(select(fromState.getSurveys)).subscribe(surveys => {
            if (!surveys || surveys.length <= 0) {
              this.store.dispatch(new LoadSurveys());
            } else {
              const survey = surveys.find(x => x.id === parseInt(surveyId, 10));
              this.survey = { ...survey };
            }
          });
        }
      }
    }
  }

  gotoEditSurvey(surveyId: string) {
    this.router.navigate(['/edit-survey', surveyId]);
  }

  saveSurvey(exitFlag) {
    this.store.dispatch(new SaveSurvey({ ...this.survey }));
    if (exitFlag) {
      this.location.back();
    }
  }
}

