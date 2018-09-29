import { Component, OnInit } from '@angular/core';
import { Survey, SurveyValidation } from '../../../models/survey.model';
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
  showValidations = false;
  showErrorPanel = false;

  validationErrors: SurveyValidation[] = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<fromState.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromActions.ResetSurvey());

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

  surveyNameChange(value: string) {
    this.store.dispatch(
      new fromActions.SurveyUpdated({ ...this.survey, name: value }));
  }

  surveyDescriptionChange(value: string) {
    this.store.dispatch(
      new fromActions.SurveyUpdated({ ...this.survey, description: value }));
  }

  saveSurvey(completeFlag: boolean, exitFlag: boolean) {
    let saveFlag = true;
    if (completeFlag) {
      saveFlag = this.validateSurvey();
    }
    if (saveFlag) {
      this.store.dispatch(new fromActions.SaveSurvey({ ...this.survey, is_complete: completeFlag }, exitFlag));
    }
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

  private validateSurvey(): boolean {
    const validationErrors: SurveyValidation[] = [];
    const sections = this.survey.sections;

    if (!this.survey.name) {
      validationErrors.push({ message: 'Survey title is not provided' });
    }
    if (!sections || sections.length <= 0) {
      validationErrors.push({ message: 'No section is added to the survey.' });
    }

    if (validationErrors.length === 0) {
      return true;
    }
    this.validationErrors = validationErrors;
    this.showValidations = true;
    return false;
  }

}
