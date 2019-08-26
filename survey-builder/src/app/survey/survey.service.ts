import { Injectable, EventEmitter } from '@angular/core';
import { Survey } from '../models/survey.model';

@Injectable()
export class SurveyService {

  private survey: Survey;

  constructor() { }

  getSurvey(): Survey {
    return this.survey;
  }

  setSurvey(survey: Survey) {
    this.survey = survey;
  }
}
