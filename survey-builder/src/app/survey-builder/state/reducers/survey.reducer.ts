import * as fromState from '../survey.state';
import * as fromActions from '../actions/survey.actions';

export function surveyReducer(state = fromState.initialState, action: fromActions.SurveyActions): fromState.SurveyState {
    switch (action.type) {
        case fromActions.SurveyActionTypes.LoadSurveysSuccess:
            return { ...state, surveys: action.payload };
        case fromActions.SurveyActionTypes.GetSurvey:
            return {
                ...state,
                currentSurvey: action.payload === 'new' ? {
                    id: 'new',
                    name: 'Survey Title',
                    description: '',
                    sections: []
                } : state.surveys.find(x => x.id === action.payload)
            };
        case fromActions.SurveyActionTypes.SurveyUpdated:
            return {
                ...state,
                currentSurvey: action.payload,
                isSurveyChanged: true
            };
        default:
            return state;
    }
}
