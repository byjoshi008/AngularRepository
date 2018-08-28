import { createStore, compose, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './state.model';
import freezeState from './freezeState';

declare var window: any;

export const store = createStore<IAppState, any, {}, {}>(
  reducer,
  compose(
    applyMiddleware(freezeState),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
