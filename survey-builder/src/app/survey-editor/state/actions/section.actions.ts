import { Action } from '@ngrx/store';
import { SurveySection } from '../../../models/survey.model';

export enum SectionActionTypes {
    AddSection = '[Section] Add New Section',
    SelectSection = '[Section] Select Section',
    DeleteSection = '[Section] Delete Section',
    SectionUpdated = '[Section] Section Updated',
    CloseSectionEditor = '[Section] Close Section Editor',
    ChangeSectionOrder = '[Section] Change Section Order'
}
export class AddSection implements Action {
    readonly type = SectionActionTypes.AddSection;
}
export class SelectSection implements Action {
    readonly type = SectionActionTypes.SelectSection;
    constructor(public payload: number) { }
}
export class DeleteSection implements Action {
    readonly type = SectionActionTypes.DeleteSection;
    constructor(public payload: number) { }
}
export class SectionUpdated implements Action {
    readonly type = SectionActionTypes.SectionUpdated;
    constructor(public payload: SurveySection) { }
}
export class CloseSectionEditor implements Action {
    readonly type = SectionActionTypes.CloseSectionEditor;
}
export class ChangeSectionOrder implements Action {
    readonly type = SectionActionTypes.ChangeSectionOrder;
    constructor(public payload: SurveySection[]) { }
}

export type SectionActions = AddSection
    | SelectSection
    | DeleteSection
    | SectionUpdated
    | CloseSectionEditor
    | ChangeSectionOrder;
