import { Action } from '@ngrx/store';
import { Survey } from '../../models/survey.model';

export enum SurveysActionTypes {
    LoadSurveys = '[Surveys] Load Survey List',
    LoadSurveysSuccess = '[Surveys] Load Survey List Success',
    SelectSurvey = '[Surveys] Select Survey',
    SaveSurvey = '[Surveys] Save Survey',
    SaveSurveySuccess = '[Surveys] Save Survey Success'
}

export class LoadSurveys implements Action {
    readonly type = SurveysActionTypes.LoadSurveys;
}
export class LoadSurveysSuccess implements Action {
    readonly type = SurveysActionTypes.LoadSurveysSuccess;
    constructor(public payload: Survey[]) { }
}
export class SelectSurvey implements Action {
    readonly type = SurveysActionTypes.SelectSurvey;
    constructor(public payload: any) { }
}
export class SaveSurvey implements Action {
    readonly type = SurveysActionTypes.SaveSurvey;
    constructor(public payload: Survey) { }
}
export class SaveSurveySuccess implements Action {
    readonly type = SurveysActionTypes.SaveSurveySuccess;
    constructor(public payload: Survey, public isNew: boolean) { }
}
export type SurveysActions = LoadSurveys
    | LoadSurveysSuccess
    | SelectSurvey
    | SaveSurvey | SaveSurveySuccess;
