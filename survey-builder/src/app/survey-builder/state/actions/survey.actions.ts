import { Action } from '@ngrx/store';
import { Survey, SurveySection } from '../../../models/survey.model';

export enum SurveyActionTypes {
    LoadSurveys = '[Survey] Load Survey List',
    LoadSurveysSuccess = '[Survey] Load Survey List Success',
    GetSurvey = '[Survey] Get Survey',
    SurveyUpdated = '[Survey] Survey Updated'
}

export class LoadSurveys implements Action {
    readonly type = SurveyActionTypes.LoadSurveys;
}

export class LoadSurveysSuccess implements Action {
    readonly type = SurveyActionTypes.LoadSurveysSuccess;
    constructor(public payload: Survey[]) { }
}

export class GetSurvey implements Action {
    readonly type = SurveyActionTypes.GetSurvey;
    constructor(public payload: string) { }
}

export class SurveyUpdated implements Action {
    readonly type = SurveyActionTypes.SurveyUpdated;
    constructor(public payload: Survey) { }
}

export type SurveyActions = LoadSurveys
    | LoadSurveysSuccess
    | GetSurvey
    | SurveyUpdated;
