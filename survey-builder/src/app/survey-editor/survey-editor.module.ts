import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SurveyEditorRoutingModule } from './routing.module';

import { EditSurveyComponent } from './containers/edit-survey/edit-survey.component';
import { SectionListComponent } from './components/section-list/section-list.component';
import { SectionEditorComponent } from './containers/section-editor/section-editor.component';
import { QuestionEditorComponent } from './components/question-editor/question-editor.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state';
import { EffectsModule } from '@ngrx/effects';
import { SurveyEditorEffects } from './state/effects/survey.effects';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { DragulaModule } from 'ng2-dragula';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    SurveyEditorRoutingModule,
    StoreModule.forFeature('survey', reducer),
    EffectsModule.forFeature([SurveyEditorEffects]),
    DragulaModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    EditSurveyComponent,
    SectionListComponent,
    SectionEditorComponent,
    QuestionListComponent,
    QuestionEditorComponent
  ],
  providers: [
  ]
})
export class SurveyEditorModule { }
