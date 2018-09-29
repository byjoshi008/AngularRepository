import { SurveyState } from '../index';
import * as fromActions from '../actions/survey.actions';

export function surveyReducer(state, action: fromActions.SurveyActions): SurveyState {
    switch (action.type) {
        case fromActions.SurveyActionTypes.GetSurveySuccess:
            return {
                ...state,
                survey: action.payload,
                currentSectionId: null,
                currentQuestionId: null,
                isSurveyChanged: false
            };
        case fromActions.SurveyActionTypes.SurveyUpdated:
            return {
                ...state,
                survey: action.payload,
                isSurveyChanged: true
            };
        case fromActions.SurveyActionTypes.SaveSurveySuccess:
            return {
                ...state,
                survey: action.payload,
                isSurveyChanged: false
            };
        case fromActions.SurveyActionTypes.ResetSurvey:
            return {
                ...state,
                survey: null,
                isSurveyChanged: false
            };
        default:
            return state;
    }
}
