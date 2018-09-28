import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
    SetErrorMessage = '[Error] Set Error Message',
    ClearErrorMessage = '[Error] Clear Error Message'
}

export class SetErrorMessage implements Action {
    readonly type = ErrorActionTypes.SetErrorMessage;
    constructor(public payload: string) { }
}

export class ClearErrorMessage implements Action {
    readonly type = ErrorActionTypes.ClearErrorMessage;
}

export type ErrorActions = SetErrorMessage | ClearErrorMessage;
