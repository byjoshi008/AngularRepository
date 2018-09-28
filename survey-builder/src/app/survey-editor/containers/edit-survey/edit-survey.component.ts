import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Survey, SurveySection } from '../../../models/survey.model';
import { Location } from '@angular/common';
import { Store, select } from '@ngrx/store';
import * as fromState from '../../state';
import * as fromActions from '../../state/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  survey: Survey;
  isChanged = false;
  currentSectionId: number;

  constructor(
    private readonly location: Location,
    private readonly route: ActivatedRoute,
    private readonly store: Store<fromState.State>) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.store.dispatch(new fromActions.GetSurvey(params.id));
    });

    this.store.pipe(select(fromState.getSurvey)).subscribe(survey => {
      this.survey = survey;
    });

    this.store.pipe(select(fromState.getCurrentSectionId)).subscribe(
      sectionid => this.currentSectionId = sectionid
    );

    this.store.pipe(select(fromState.getSurveyChanged)).subscribe(isChanged => {
      this.isChanged = isChanged;
    });
  }

  goBack() {
    this.location.back();
  }

  surveyNameChange(value: string) {
    this.store.dispatch(
      new fromActions.SurveyUpdated({ ...this.survey, name: value }));
  }

  surveyDescriptionChange(value: string) {
    this.store.dispatch(
      new fromActions.SurveyUpdated({ ...this.survey, description: value }));
  }

  saveSurvey() {
    this.store.dispatch(new fromActions.SaveSurvey({ ...this.survey }));
  }

  addNewSection() {
    this.store.dispatch(new fromActions.AddSection());
  }

  selectSection(sectionId) {
    this.store.dispatch(new fromActions.SelectSection(sectionId));
  }

  deleteSection(sectionId) {
    this.store.dispatch(new fromActions.DeleteSection(sectionId));
  }

  changeSectionOrder(sections) {
    this.store.dispatch(new fromActions.ChangeSectionOrder(sections));
  }

}
