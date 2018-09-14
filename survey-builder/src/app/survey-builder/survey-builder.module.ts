import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyBuilderRoutingModule } from './routing.module';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SurveyBuilderRoutingModule
  ],
  declarations: [SurveyListComponent, EditSurveyComponent]
})
export class SurveyBuilderModule { }
