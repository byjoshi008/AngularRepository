import { Action } from '@ngrx/store';
import { ISupplyEvent } from '../models/event.models';

export enum AppActionTypes {
  Load = '[Event] Load',
  LoadSuccess = '[Event] Load Success',
  LoadFail = '[Event] Load Fail',
  SelectEvent = '[Select Event] Set Current Event',
  LocationSupplied = '[Mark Location Supplied] Mark location as Supplied',
  LocationSuppliedSuccess = '[Mark Location Supplied] Mark location as Supplied Success'
}

export class Load implements Action {
  readonly type = AppActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = AppActionTypes.LoadSuccess;

  constructor(public payload: ISupplyEvent[]) { }
}

export class LoadFail implements Action {
  readonly type = AppActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class SelectEvent implements Action {
  readonly type = AppActionTypes.SelectEvent;
  constructor(public payload: string) { }
}

export class LocationSupplied implements Action {
  readonly type = AppActionTypes.LocationSupplied;
  constructor(public payload: string) { }
}

export class LocationSuppliedSuccess implements Action {
  readonly type = AppActionTypes.LocationSuppliedSuccess;
  constructor(public payload: ISupplyEvent) { }
}

export type AppActions =
  | Load
  | LoadSuccess
  | LoadFail
  | SelectEvent
  | LocationSupplied
  | LocationSuppliedSuccess;
