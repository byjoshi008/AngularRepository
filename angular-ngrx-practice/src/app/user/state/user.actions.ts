import { Action } from '@ngrx/store';

export enum UserActionTypes {
  MarkUserName = '[User] Mask User Name'
}

export class MaskUserName implements Action {
  readonly type = UserActionTypes.MarkUserName;
  constructor(public payload: boolean) {}
}

export type UserActions = MaskUserName;
