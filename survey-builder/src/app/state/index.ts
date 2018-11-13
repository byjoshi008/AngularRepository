import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromReducers from './reducers';
import { environment } from '../../environments/environment';
import { Survey } from '../models/survey.model';

export interface State {
  error: fromReducers.ErrorState;
  surveys: fromReducers.SurveysState;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  error: fromReducers.errorReducer,
  surveys: fromReducers.surveysReducer,
  router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getErrorState = createFeatureSelector<State, fromReducers.ErrorState>('error');
export const getSurveysState = createFeatureSelector<State, fromReducers.SurveysState>('surveys');

export const getErrorMessage = createSelector(
  getErrorState,
  fromReducers.getErrorMessage
);

export const getSurveys = createSelector(
  getSurveysState,
  fromReducers.getSurveys
);
export const getCurrentSurveyId = createSelector(
  getSurveysState,
  fromReducers.getCurrentSurveyId
);
export const getSurvey = createSelector(
  getSurveysState,
  getCurrentSurveyId,
  (state, surveyId: any) => { console.log(state); return state.surveys.find(x => x.id === surveyId); }
);

