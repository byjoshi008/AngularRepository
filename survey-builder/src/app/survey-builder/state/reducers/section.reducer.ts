import * as fromState from '../survey.state';
import * as fromActions from '../actions/section.actions';

export function sectionReducer(state = fromState.initialState, action: fromActions.SectionActions): fromState.SurveyState {
    switch (action.type) {
        case fromActions.SectionActionTypes.AddSection:
            const sectionid = state.currentSurvey.sections.length + 1;
            return {
                ...state,
                isSurveyChanged: true,
                currentSurvey: {
                    ...state.currentSurvey,
                    sections: [...state.currentSurvey.sections,
                    {
                        id: sectionid,
                        title: 'New Section',
                        description: '',
                        questions: []
                    }]
                },
                currentSectionId: sectionid
            };
        case fromActions.SectionActionTypes.SelectSection:
            return {
                ...state,
                currentSectionId: action.payload,
                currentQuestionId: 0
            };
        case fromActions.SectionActionTypes.SectionUpdated:
            return {
                ...state,
                currentSurvey: {
                    ...state.currentSurvey,
                    sections: state.currentSurvey.sections.map(x => x.id === action.payload.id ? action.payload : x)
                },
                isSurveyChanged: true
            };
        case fromActions.SectionActionTypes.CloseSectionEditor:
            return {
                ...state,
                currentSectionId: 0,
                currentQuestionId: null
            };
        case fromActions.SectionActionTypes.DeleteSection:
            return {
                ...state,
                isSurveyChanged: true,
                currentQuestionId:
                    action.payload === state.currentSectionId ? 0 : state.currentQuestionId,
                currentSectionId:
                    action.payload === state.currentSectionId ? 0 : state.currentSectionId,
                currentSurvey: {
                    ...state.currentSurvey,
                    sections:
                        state.currentSurvey.sections
                            .filter(x => x.id !== action.payload)
                            .map((x, index) => ({ ...x, id: index + 1 }))
                }
            };
        default:
            return state;
    }
}
