import { NgModule } from '@angular/core';
import { SurveyBuilderRoutingModule } from './routing.module';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';
import { SharedModule } from '../shared/shared.module';
import { SectionListComponent } from './section-list/section-list.component';
import { SectionEditorComponent } from './section-editor/section-editor.component';

@NgModule({
  imports: [
    SharedModule,
    SurveyBuilderRoutingModule
  ],
  declarations: [
    SurveyListComponent,
    EditSurveyComponent,
    SectionListComponent,
    SectionEditorComponent
  ]
})
export class SurveyBuilderModule { }
