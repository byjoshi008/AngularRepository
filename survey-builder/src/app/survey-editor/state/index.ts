import { Survey } from '../../models/survey.model';
import * as fromRoot from '../../state';
import * as fromActions from './actions';
import { surveyReducer } from './reducers/survey.reducer';
import { sectionReducer } from './reducers/section.reducer';
import { questionReducer } from './reducers/question.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface SurveyState {
    survey: Survey;
    currentSectionId: number;
    currentQuestionId: number;
    isSurveyChanged: boolean;
}

export interface State extends fromRoot.State {
    survey: SurveyState;
}

export const initialState: SurveyState = {
    survey: null,
    currentSectionId: 0,
    currentQuestionId: 0,
    isSurveyChanged: false
};

export function reducer(
    state = initialState,
    action: fromActions.SurveyActions | fromActions.SectionActions | fromActions.QuestionActions)
    : SurveyState {
    if (Object.values(fromActions.SurveyActionTypes).indexOf(action.type) >= 0) {
        const newAction = action as fromActions.SurveyActions;
        return surveyReducer(state, newAction);
    } else if (Object.values(fromActions.SectionActionTypes).indexOf(action.type) >= 0) {
        const newAction = action as fromActions.SectionActions;
        return sectionReducer(state, newAction);
    } else if (Object.values(fromActions.QuestionActionTypes).indexOf(action.type) >= 0) {
        const newAction = action as fromActions.QuestionActions;
        return questionReducer(state, newAction);
    }
    return state;
}

// Feature secetor for survey
const getSurveyState = createFeatureSelector<SurveyState>('survey');

// Selector for all state properties
export const getSurvey = createSelector(
    getSurveyState,
    state => state.survey
);
export const getCurrentSectionId = createSelector(
    getSurveyState,
    state => state.currentSectionId
);
export const getCurrentQuestionId = createSelector(
    getSurveyState,
    state => state.currentQuestionId
);
export const getSurveyChanged = createSelector(
    getSurveyState,
    state => state.isSurveyChanged
);

// Derived Selectors to get current Survey, current Section and current Question
export const getSections = createSelector(
    getSurvey,
    survey => survey.sections
);
export const getSection = createSelector(
    getSections,
    getCurrentSectionId,
    (sections, id) => sections.find(x => x.id === id)
);
export const getQuestions = createSelector(
    getSection,
    section => section.questions
);
export const getQuestion = createSelector(
    getQuestions,
    getCurrentQuestionId,
    (questions, id) => questions.find(x => x.id === id)
);

