import { SurveyBuilderModule } from './survey-builder.module';

describe('SurveyBuilderModule', () => {
  let surveyBuilderModule: SurveyBuilderModule;

  beforeEach(() => {
    surveyBuilderModule = new SurveyBuilderModule();
  });

  it('should create an instance', () => {
    expect(surveyBuilderModule).toBeTruthy();
  });
});
