import * as surveysActions from '../actions/surveys.actions';
import { Survey } from '../../models/survey.model';

export interface SurveysState {
    surveys: Survey[];
}
const initialState: SurveysState = {
    surveys: null
};
export function surveysReducer(
    state: SurveysState = initialState,
    action: surveysActions.SurveysActions
): SurveysState {
    switch (action.type) {
        case surveysActions.SurveysActionTypes.LoadSurveysSuccess:
            return {
                surveys: action.payload,
            };
        default:
            return state;
    }
}

export const getSurveys = (state: SurveysState) => state.surveys;
