import { Action } from '@ngrx/store';

export enum AppActionTypes {
    SetErrorMessage = '[App Action] Set Error Message',
    ClearErrorMessage = '[App Action] Clear Error Message',
}

export class SetErrorMessage implements Action {
    readonly type = AppActionTypes.SetErrorMessage;
    constructor(public payload: string) { }
}

export class ClearErrorMessage implements Action {
    readonly type = AppActionTypes.ClearErrorMessage;
}

export type AppActions = SetErrorMessage | ClearErrorMessage;
