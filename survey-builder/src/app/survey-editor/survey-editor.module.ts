import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditSurveyComponent } from './containers/edit-survey/edit-survey.component';
import { SectionEditorComponent } from './containers/section-editor/section-editor.component';
import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    EditSurveyComponent,
    SectionEditorComponent,
    components.InlineTextEditComponent,
    components.CheckboxComponent,
    components.SectionListComponent,
    components.QuestionListComponent,
    components.QuestionEditorComponent
  ],
  exports: [EditSurveyComponent],
  providers: []
})
export class SurveyEditorModule { }
