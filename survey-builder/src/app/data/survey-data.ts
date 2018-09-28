import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Survey } from '../models/survey.model';

export class SurveyData implements InMemoryDbService {

    createDb() {
        const surveys: Survey[] = [
            {
                id: 1,
                name: 'Test Data',
                description: 'Test Description',
                sections: []
            }
        ];
        return { surveys };
    }
}
