import { Action } from '@ngrx/store';
import { Survey } from '../../models/survey.model';

export enum SurveysActionTypes {
    LoadSurveys = '[Surveys] Load Survey List',
    LoadSurveysSuccess = '[Surveys] Load Survey List Success',
}

export class LoadSurveys implements Action {
    readonly type = SurveysActionTypes.LoadSurveys;
}

export class LoadSurveysSuccess implements Action {
    readonly type = SurveysActionTypes.LoadSurveysSuccess;
    constructor(public payload: Survey[]) { }
}

export type SurveysActions = LoadSurveys | LoadSurveysSuccess;
