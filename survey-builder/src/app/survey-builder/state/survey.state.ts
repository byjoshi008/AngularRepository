import * as fromRoot from '../../reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Survey } from '../../models/survey.model';

export interface SurveyState {
    surveys: Survey[];
    currentSurvey: Survey;
    currentSectionId: number;
    currentQuestionId: number;
    isSurveyChanged: boolean;
}

export interface State extends fromRoot.State {
    survey: SurveyState;
}

export const initialState: SurveyState = {
    surveys: [],
    currentSurvey: null,
    currentSectionId: 0,
    currentQuestionId: 0,
    isSurveyChanged: false
};

// Feature secetor for survey
const getSurveyState = createFeatureSelector<SurveyState>('survey');

// Selector for all state properties
export const getSurveys = createSelector(
    getSurveyState,
    state => state.surveys
);
export const getCurrentSurvey = createSelector(
    getSurveyState,
    state => state.currentSurvey
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
    getCurrentSurvey,
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
