import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap, ActionReducer, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromApp from './app.reducer';
import { environment } from '../../environments/environment';

export interface State {
    app: fromApp.State;
    router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    app: fromApp.reducer,
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

export const getAppState = createFeatureSelector<State, fromApp.State>('app');

export const getErrorMessage = createSelector(
    getAppState,
    fromApp.getErrorMessage
);
