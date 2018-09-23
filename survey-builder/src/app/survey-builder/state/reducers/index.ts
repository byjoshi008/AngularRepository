import { combineReducers, ActionReducerMap } from '@ngrx/store';
import { surveyReducer } from './survey.reducer';
import { sectionReducer } from './section.reducer';
import * as fromState from '../survey.state';
import * as fromActions from '../actions';

export function reducer(
    state = fromState.initialState,
    action: fromActions.SurveyActions | fromActions.SectionActions)
    : fromState.SurveyState {
    if (Object.values(fromActions.SurveyActionTypes).indexOf(action.type) >= 0) {
        const newAction = action as fromActions.SurveyActions;
        return surveyReducer(state, newAction);
    } else if (Object.values(fromActions.SectionActionTypes).indexOf(action.type) >= 0) {
        const newAction = action as fromActions.SectionActions;
        return sectionReducer(state, newAction);
    }
    return state;
}
