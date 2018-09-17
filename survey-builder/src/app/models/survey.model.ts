export interface Survey {
    id: string;
    name: string;
    description: string;
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
    id: string;
    text: string;
    description: string;
    output: string;
    type: string;
}
