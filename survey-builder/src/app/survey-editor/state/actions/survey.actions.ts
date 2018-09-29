import { Action } from '@ngrx/store';
import { Survey, SurveySection } from '../../../models/survey.model';

export enum SurveyActionTypes {
    GetSurvey = '[Survey] Get Survey',
    GetSurveySuccess = '[Survey] Get Survey Success',
    SurveyUpdated = '[Survey] Survey Updated',
    SaveSurvey = '[Survey] Save Survey',
    SaveSurveySuccess = '[Survey] Save Survey Success',
    ResetSurvey = '[Survey] Reset Survey'
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
    constructor(public payload: Survey, public exitFlag: boolean) { }
}

export class SaveSurveySuccess implements Action {
    readonly type = SurveyActionTypes.SaveSurveySuccess;
    constructor(public payload: Survey) { }
}
export class ResetSurvey implements Action {
    readonly type = SurveyActionTypes.ResetSurvey;
}

export type SurveyActions = GetSurvey
    | GetSurveySuccess
    | SurveyUpdated
    | SaveSurvey
    | SaveSurveySuccess
    | ResetSurvey;
