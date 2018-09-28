import { Action } from '@ngrx/store';
import { SurveyQuestion } from '../../../models/survey.model';

export enum QuestionActionTypes {
    AddQuestion = '[Question] Add New Question',
    SelectQuestion = '[Question] Select Question',
    DeleteQuestion = '[Question] Delete Question',
    QuestionUpdated = '[Question] Question Updated',
    CloseQuestionEditor = '[Question] Close Question Editor',
    ChangeQuestionOrder = '[Question] Change Question Order'
}

export class AddQuestion implements Action {
    readonly type = QuestionActionTypes.AddQuestion;
}
export class SelectQuestion implements Action {
    readonly type = QuestionActionTypes.SelectQuestion;
    constructor(public payload: number) { }
}
export class DeleteQuestion implements Action {
    readonly type = QuestionActionTypes.DeleteQuestion;
    constructor(public payload: number) { }
}
export class QuestionUpdated implements Action {
    readonly type = QuestionActionTypes.QuestionUpdated;
    constructor(public payload: SurveyQuestion) { }
}
export class CloseQuestionEditor implements Action {
    readonly type = QuestionActionTypes.CloseQuestionEditor;
}
export class ChangeQuestionOrder implements Action {
    readonly type = QuestionActionTypes.ChangeQuestionOrder;
    constructor(public payload: SurveyQuestion[]) { }
}

export type QuestionActions = AddQuestion
    | SelectQuestion
    | DeleteQuestion
    | QuestionUpdated
    | CloseQuestionEditor
    | ChangeQuestionOrder;
