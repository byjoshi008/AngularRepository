import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Survey } from '../models/survey.model';

export class SurveyData implements InMemoryDbService {

    createDb() {
        const surveys: Survey[] = [];
        return { surveys };
    }
}
