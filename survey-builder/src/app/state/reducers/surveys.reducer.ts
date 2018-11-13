import * as surveysActions from '../actions/surveys.actions';
import { Survey } from '../../models/survey.model';

export interface SurveysState {
  surveys: Survey[];
  currentSurveyId: any;
}
const initialState: SurveysState = {
  surveys: null,
  currentSurveyId: null
};
export function surveysReducer(
  state: SurveysState = initialState,
  action: surveysActions.SurveysActions
): SurveysState {
  switch (action.type) {
    case surveysActions.SurveysActionTypes.LoadSurveysSuccess:
      return {
        ...state,
        surveys: action.payload,
      };
    case surveysActions.SurveysActionTypes.SelectSurvey:
      return {
        ...state,
        currentSurveyId: action.payload,
      };
    case surveysActions.SurveysActionTypes.SaveSurveySuccess:
      return {
        ...state,
        surveys: action.isNew
          ? [...state.surveys, action.payload]
          : state.surveys.map(x => x.id === action.payload.id ? action.payload : x),
        currentSurveyId: action.payload.id
      };
    default:
      return state;
  }
}

export const getSurveys = (state: SurveysState) => state.surveys;
export const getCurrentSurveyId = (state: SurveysState) => state.currentSurveyId;

