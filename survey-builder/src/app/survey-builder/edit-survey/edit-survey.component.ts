import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Survey, SurveySection } from '../../models/survey.model';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as state from '../state/survey.state';
import * as fromActions from '../state/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  survey: Survey;
  isChanged = false;

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly store: Store<state.State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new fromActions.GetSurvey(params.id));
    });

    this.store.pipe(select(state.getCurrentSurvey)).subscribe(survey => {
      this.survey = survey;
    });

    this.store.pipe(select(state.getSurveyChanged)).subscribe(isChanged => {
      this.isChanged = isChanged;
    });
  }

  goBack() {
    this.location.back();
  }

  addNewSection() {
    this.store.dispatch(new fromActions.AddSection());
  }

  surveyNameChange(value: string) {
    this.store.dispatch(
      new fromActions.SurveyUpdated({ ...this.survey, name: value }));
  }

  surveyDescriptionChange(value: string) {
    this.store.dispatch(
      new fromActions.SurveyUpdated({ ...this.survey, description: value }));
  }
}
