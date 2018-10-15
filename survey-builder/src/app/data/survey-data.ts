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
            }, {
                'id': 5,
                'name': 'EWM Partner Assessment',
                'description': '',
                'sections': [{
                    'id': 1,
                    'title': 'Company\'s H&S performance and it\'s attitude towards H&S',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Company\'s Performance',
                        'description': 'Partners to insert LTIA frequency rate, in a rolling 12 month period',
                        'type': 'Text',
                        'output': 'question1_1',
                        'attachments': true
                    }, {
                        'id': 2,
                        'text': 'Partner\'s attitude',
                        'description': '1. Demonstrate the company’s plan and initiatives towards H&S and well being 2. Demonstrate company’s approach to occupational health',
                        'type': 'Text',
                        'output': 'question1_2',
                        'attachments': true
                    }]
                }, {
                    'id': 2,
                    'title': 'The behavior and culture of the company',
                    'description': 'The behavior and culture of the company including individuals to ensure continued alignment with the alliance principles',
                    'questions': [{
                        'id': 1,
                        'text': 'Innovation, Collaboration and Transformation',
                        'description': 'Partner to provide a statement on their assessment of their contribution to schedule 8',
                        'type': 'Text',
                        'output': 'question2_1',
                        'attachments': true
                    }, {
                        'id': 2,
                        'text': 'Commercial Management',
                        'description': 'Partner to provide a statement on their assessment of their contribution to schedule 8',
                        'type': 'Text',
                        'output': 'question2_2',
                        'attachments': true
                    }]
                }, {
                    'id': 3,
                    'title': 'Company\'s ability and/or contribution to delivering Projects and/or contribution to outperforming projects',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Company statement regarding their contribution made to deliver projects and drive outperformance',
                        'description': '',
                        'type': 'Text',
                        'output': 'question3_1',
                        'attachments': true
                    }]
                }, {
                    'id': 4,
                    'title': 'Behavior (including ethical behavior) that has or may affect or damage the Company\'s and/or Employer\'s business reputations and behavior being aligned to the Employer\'s and/or the Company\'s standards',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Provide evidence of a whistle-blowing policy',
                        'description': 'Declare no of incidents reported in this rolling 12 month period. Have you changed any process as a result of these incidents? ',
                        'type': 'Text',
                        'output': 'question4_1',
                        'attachments': true
                    }, {
                        'id': 2,
                        'text': 'Provide evidence of a Anti Bribery & Corruption policy',
                        'description': 'Declare no of incidents reported in this rolling 12 month period. Have you changed any process as a result of these incidents?',
                        'type': 'Text',
                        'output': 'question4_2',
                        'attachments': true
                    }, {
                        'id': 3,
                        'text': 'Provide evidence of a Modern Slavery Act policy',
                        'description': 'Declare no of incidents reported in this rolling 12 month period. Have you changed any process as a result of these incidents?',
                        'type': 'Text',
                        'output': 'question4_3',
                        'attachments': true
                    }, {
                        'id': 4,
                        'text': 'Detail what your company is currently doing to ensure compliance with the GDPR regulation that comes into force on 25th May 2018',
                        'description': '',
                        'type': 'Text',
                        'output': 'question4_4',
                        'attachments': true
                    }]
                }, {
                    'id': 5,
                    'title': 'Any material change in status of the Company\'s ownership, financial standing, changes in key personnel which the Employer believes may affect the ability of the company to continue to operate within an alliance environment in accordance with the alliance principle and/or to perform services',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Any change in company\'s ownership during 2017?',
                        'description': 'If yes, please provide details',
                        'type': 'Text',
                        'output': 'question5_1',
                        'attachments': true
                    }, {
                        'id': 2,
                        'text': 'Any change in company\'s financial standing during 2017?',
                        'description': 'If yes, please provide details. As part of this submission please provide copy of your latest approved accounts.',
                        'type': 'Text',
                        'output': 'question5_2',
                        'attachments': true
                    }, {
                        'id': 3,
                        'text': 'Any change in company\'s key personnel at board level since during 2017?',
                        'description': 'If yes, please provide details',
                        'type': 'Text',
                        'output': 'question5_3',
                        'attachments': true
                    }]
                }, {
                    'id': 6,
                    'title': 'Validation of the warranties and undertakings set out in the Alliance Agreement',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Confirmation by the company that they are complying to alliance framework agreement',
                        'description': 'a. It is a corporation, duly incorporated and validly existing under the law of its jurisdiction of incorporation. b. It has the power to own its assets and carry on its business as it is being conducted. c. It has the power to enter into, perform and deliver, and has taken all necessary action to authorise its entry into, performance and delivery of this Agreement and the transactions contemplated by this Agreement. d. The entry into and performance by it of, and the transactions contemplated by, this Agreement do not and will not conflict with any law or regulation applicable to it, its constitutional documents or any agreement or instrument binding on it or any of its assets.',
                        'type': 'Text',
                        'output': 'question6_1',
                        'attachments': true
                    }]
                }, {
                    'id': 7,
                    'title': 'An assessment of the company\'s attitude towards the management of risks, issues and resolution of disputes, in particular the resolution of disputes in accordance with the procedure set out in clause 9 of the alliance agreement',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Disputes - Please provide detail of any notices of concern raised between the partner and AW, along with detail on how this has been managed by the company',
                        'description': '',
                        'type': 'text',
                        'output': 'question7_1',
                        'attachments': true
                    }]
                }, {
                    'id': 8,
                    'title': 'An assessment of the company\'s approach and culture with regard to the management of the supply chain',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Please confirm if the company is part of the Construction Supply Chain Payment Charter and detail how the company agrees payment terms with it\'s suppliers and assures these payment terms are met',
                        'description': '',
                        'type': 'Text',
                        'output': 'question8_1',
                        'attachments': true
                    }, {
                        'id': 2,
                        'text': 'Payment on time - Spot check of circa 40 payments against agreed terms that will be done during the assessment',
                        'description': '',
                        'type': 'Text',
                        'output': 'question8_2',
                        'attachments': true
                    }, {
                        'id': 3,
                        'text': 'Please provide details of your cultural and behavioural engagement with your Supply Chain',
                        'description': '',
                        'type': 'Text',
                        'output': 'question8_3',
                        'attachments': true
                    }, {
                        'id': 4,
                        'text': 'For the last 12 months, please detail below the rebates received and where applicable, when have these been credited back to the alliance framework',
                        'description': '',
                        'type': 'Text',
                        'output': 'question8_4',
                        'attachments': true
                    }]
                }, {
                    'id': 9,
                    'title': 'The adequacy and provision of financial instruments in the form of parent company guarantees, performance bonds and insurances as required by the alliance agreement',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Dissussion, If required',
                        'description': '',
                        'type': 'Text',
                        'output': 'question9_1',
                        'attachments': true
                    }]
                }, {
                    'id': 10,
                    'title': 'Organisational Development Contributions',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Diversity Metric',
                        'description': 'Please provide the male / female ratio, as a percentage, within both the company and the company staff within the alliance',
                        'type': 'Text',
                        'output': 'question10_1',
                        'attachments': true
                    }, {
                        'id': 2,
                        'text': 'Strategic HR network',
                        'description': 'How is the company contributing to the overall people agenda within the Anglian Water framework, as part of the HR strategic network?',
                        'type': 'Text',
                        'output': 'question10_2',
                        'attachments': true
                    }, {
                        'id': 3,
                        'text': 'Training',
                        'description': 'The Alliance agreement allows 4 days training for each staff member, please detail for the last 12 months; what training has been provided for each individual, by the company (excluding any training provided directly by the alliance).',
                        'type': 'Text',
                        'output': 'question10_3',
                        'attachments': true
                    }, {
                        'id': 4,
                        'text': 'Development and Performance management',
                        'description': 'How does the company ensure it\'s aligned with the alliance in terms of staff development and/or performance management?',
                        'type': 'Text',
                        'output': 'question10_4',
                        'attachments': true
                    }, {
                        'id': 5,
                        'text': 'Behavioral Chane',
                        'description': 'What is the company\'s strategy for delivering behavioral change and how do you intend to measure this?',
                        'type': 'Text',
                        'output': 'question10_5',
                        'attachments': true
                    }]
                }, {
                    'id': 11,
                    'title': 'Organisational Development Contributions',
                    'description': '',
                    'questions': [{
                        'id': 1,
                        'text': 'Local Community Engagement & CSR',
                        'description': 'Please provide examples of the local community engagement and corporate social responsibility;',
                        'type': 'Text',
                        'output': 'question11_1',
                        'attachments': true
                    }]
                }, {
                    'id': 12,
                    'title': 'Feedback',
                    'description': 'Opportunity for the company to provide Employer with constructive feedback',
                    'questions': [{
                        'id': 1,
                        'text': 'Feedback',
                        'description': '',
                        'type': 'Text',
                        'output': 'question12_1',
                        'attachments': true
                    }]
                }],
                'is_complete': false
            }
        ];
        return { surveys };
    }
}
