import { IAppState } from '../models/app-state.model';
import { AppActions, AppActionTypes } from './app.actions';
import { ActionReducer, MetaReducer } from '@ngrx/store';

export const initialState: IAppState = {
  eventList: [],
  isHomePage: true,
  currentEventId: '',
  errorMessage: ''
};

export const getEventList = state => state.eventList;
export const getIsHomePage = (state: IAppState) => state.isHomePage;
export const getCurrentEvent = (state: IAppState) => {
  return state.eventList.find(event => event.id === state.currentEventId);
};
export const getError = (state: IAppState) => state.errorMessage;

function rootReducer(state = initialState, action: AppActions): IAppState {
  switch (action.type) {
    case AppActionTypes.LoadSuccess:
      return {
        ...state,
        eventList: action.payload,
        isHomePage: true,
        errorMessage: ''
      };
    case AppActionTypes.LoadFail:
      return {
        ...state,
        eventList: [],
        isHomePage: true,
        errorMessage: action.payload
      };
    case AppActionTypes.SelectEvent:
      return {
        ...state,
        currentEventId: action.payload,
        isHomePage: false
      };
    case AppActionTypes.LocationSuppliedSuccess:
      return {
        ...state,
        eventList: state.eventList.map(e => e.id === action.payload.id ? action.payload : e)
      };
    default:
      return state;
  }
}

function metaReducer(
  reducer: ActionReducer<IAppState>
): ActionReducer<IAppState> {
  return function (state, action: AppActions) {
    return rootReducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [metaReducer];
