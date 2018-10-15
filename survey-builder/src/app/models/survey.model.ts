export interface Survey {
    id?: number;
    name: string;
    description: string;
    is_complete: boolean;
    // version: number;
    // is_active: boolean;
    // is_released: boolean;
    // created_at: Date;
    // created_by: string;
    // changed_at: Date;
    // changed_by: string;
    // released_at: Date;
    // released_by: string;
    sections: SurveySection[];
}

export interface SurveySection {
    id: number;
    title: string;
    description: string;
    questions: SurveyQuestion[];
}

export interface SurveyQuestion {
    id: number;
    text: string;
    description: string;
    output: string;
    type: string;
    attachments: boolean;
    mandatory?: boolean;
    error_message?: string;
}

export interface SurveyValidation {
    section?: number;
    question?: number;
    message: string;
}
