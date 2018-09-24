import * as fromState from '../survey.state';
import * as fromActions from '../actions/question.actions';

export function questionReducer(state = fromState.initialState, action: fromActions.QuestionActions): fromState.SurveyState {
    let newState = { ...state };
    let currentSection = state.currentSurvey.sections.find(x => x.id === state.currentSectionId);
    currentSection = { ...currentSection };

    switch (action.type) {
        case fromActions.QuestionActionTypes.AddQuestion:
            const questionId = currentSection.questions.length + 1;
            currentSection.questions = [...currentSection.questions,
            {
                id: questionId,
                text: '',
                description: '',
                type: '',
                output: `Question ${state.currentSectionId}.${questionId}`,
                attachments: false
            }];
            newState = {
                ...state,
                currentQuestionId: questionId,
                isSurveyChanged: true
            };
            break;
        case fromActions.QuestionActionTypes.SelectQuestion:
            return {
                ...state,
                currentQuestionId: action.payload
            };
        case fromActions.QuestionActionTypes.QuestionUpdated:
            currentSection.questions = currentSection.questions.map(
                x => x.id === action.payload.id ? action.payload : x
            );
            newState = {
                ...state,
                isSurveyChanged: true
            };
            break;
        case fromActions.QuestionActionTypes.DeleteQuestion:
            currentSection.questions = currentSection.questions.filter(
                x => x.id !== action.payload
            ).map((x, index) => ({ ...x, id: index + 1 }));
            newState = {
                ...state,
                currentQuestionId:
                    state.currentQuestionId === action.payload ? 0 : state.currentQuestionId,
                isSurveyChanged: true
            };
            break;
        default:
            return state;
    }

    return {
        ...newState,
        currentSurvey: {
            ...state.currentSurvey,
            sections: state.currentSurvey.sections.map(
                x => x.id === currentSection.id ? currentSection : x
            )
        }
    };
}
