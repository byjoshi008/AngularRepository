import { SurveyState } from '../index';
import * as fromActions from '../actions/question.actions';
import { SurveyQuestion } from '../../../models/survey.model';

function mapQuestionIds(questions: SurveyQuestion[]): SurveyQuestion[] {
    return questions.map((x, index) => ({ ...x, id: index + 1 }));
}

export function questionReducer(state, action: fromActions.QuestionActions): SurveyState {
    let newState = { ...state };
    let currentSection = state.survey.sections.find(x => x.id === state.currentSectionId);
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
                output: `question${state.currentSectionId}_${questionId}`,
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
            currentSection.questions = mapQuestionIds(currentSection.questions.filter(
                x => x.id !== action.payload
            ));
            newState = {
                ...state,
                isSurveyChanged: true
            };
            break;
        case fromActions.QuestionActionTypes.CloseQuestionEditor:
            return {
                ...state,
                currentQuestionId: null
            };
        case fromActions.QuestionActionTypes.ChangeQuestionOrder:
            currentSection.questions = mapQuestionIds(action.payload);
            newState = {
                ...state,
                isSurveyChanged: true
            };
            break;
        default:
            return state;
    }

    return {
        ...newState,
        survey: {
            ...state.survey,
            sections: state.survey.sections.map(
                x => x.id === currentSection.id ? currentSection : x
            )
        }
    };
}
