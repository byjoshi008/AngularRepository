import { SurveyState } from '../index';
import * as fromActions from '../actions/section.actions';
import { SurveySection } from '../../../models/survey.model';

function mapSectionIds(sections: SurveySection[]) {
    return sections.map((x, index) => ({ ...x, id: index + 1 }));
}

export function sectionReducer(state, action: fromActions.SectionActions): SurveyState {
    switch (action.type) {
        case fromActions.SectionActionTypes.AddSection:
            const sectionid = state.survey.sections.length + 1;
            return {
                ...state,
                isSurveyChanged: true,
                survey: {
                    ...state.survey,
                    sections: [...state.survey.sections,
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
                currentQuestionId: null
            };
        case fromActions.SectionActionTypes.SectionUpdated:
            return {
                ...state,
                survey: {
                    ...state.survey,
                    sections: state.survey.sections.map(x => x.id === action.payload.id ? action.payload : x)
                },
                isSurveyChanged: true
            };
        case fromActions.SectionActionTypes.CloseSectionEditor:
            return {
                ...state,
                currentSectionId: null,
                currentQuestionId: null
            };
        case fromActions.SectionActionTypes.DeleteSection:
            return {
                ...state,
                isSurveyChanged: true,
                currentQuestionId:
                    action.payload === state.currentSectionId ? null : state.currentQuestionId,
                currentSectionId:
                    action.payload === state.currentSectionId ? null : state.currentSectionId,
                survey: {
                    ...state.survey,
                    sections: mapSectionIds(state.survey.sections
                        .filter(x => x.id !== action.payload))
                }
            };
        case fromActions.SectionActionTypes.ChangeSectionOrder:
            const newSectionId = state.currentSectionId ? action.payload.findIndex(x => x.id === state.currentSectionId) + 1 : null;
            return {
                ...state,
                survey: {
                    ...state.survey,
                    sections: mapSectionIds(action.payload)
                },
                currentSectionId: newSectionId,
                isSurveyChanged: true
            };
        default:
            return state;
    }
}
