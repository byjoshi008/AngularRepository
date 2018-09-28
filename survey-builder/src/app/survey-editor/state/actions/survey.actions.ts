import { Action } from '@ngrx/store';
import { Survey, SurveySection } from '../../../models/survey.model';

export enum SurveyActionTypes {
    GetSurvey = '[Survey] Get Survey',
    GetSurveySuccess = '[Survey] Get Survey Success',
    SurveyUpdated = '[Survey] Survey Updated',
    SaveSurvey = '[Survey] Save Survey',
    SaveSurveySuccess = '[Survey] Save Survey Success'
}

export class GetSurvey implements Action {
    readonly type = SurveyActionTypes.GetSurvey;
    constructor(public payload: any) { }
}

export class GetSurveySuccess implements Action {
    readonly type = SurveyActionTypes.GetSurveySuccess;
    constructor(public payload: Survey) { }
}

export class SurveyUpdated implements Action {
    readonly type = SurveyActionTypes.SurveyUpdated;
    constructor(public payload: Survey) { }
}

export class SaveSurvey implements Action {
    readonly type = SurveyActionTypes.SaveSurvey;
    constructor(public payload: Survey) { }
}

export class SaveSurveySuccess implements Action {
    readonly type = SurveyActionTypes.SaveSurveySuccess;
    constructor(public payload: Survey) { }
}

export type SurveyActions = GetSurvey
    | GetSurveySuccess
    | SurveyUpdated
    | SaveSurvey
    | SaveSurveySuccess;
