import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SurveyBuilderRoutingModule } from './routing.module';

import { SurveyListComponent } from './survey-list/survey-list.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionEditorComponent } from './section-editor/section-editor.component';
import { QuestionTabsComponent } from './question-tabs/question-tabs.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SurveyBuilderEffects } from './state/effects/survey.effects';
import { SurveyService } from './survey.service';

@NgModule({
  imports: [
    SharedModule,
    SurveyBuilderRoutingModule,
    StoreModule.forFeature('survey', reducer),
    EffectsModule.forFeature([SurveyBuilderEffects])
  ],
  declarations: [
    SurveyListComponent,
    EditSurveyComponent,
    SectionListComponent,
    SectionEditorComponent,
    QuestionTabsComponent,
    QuestionEditorComponent
  ],
  providers: [
    SurveyService
  ]
})
export class SurveyBuilderModule { }
