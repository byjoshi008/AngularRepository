import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Survey } from '../models/survey.model';

export class SurveyData implements InMemoryDbService {

    createDb() {
        const surveys: Survey[] = [
            {
                id: 1,
                name: 'First Survey',
                description: 'Test Description 1',
                sections: [],
                is_complete: false
            },
            {
                id: 2,
                name: 'Second Survey',
                description: 'Test Description 2',
                sections: [],
                is_complete: true
            }
        ];
        return { surveys };
    }
}
