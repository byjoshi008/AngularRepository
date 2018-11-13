import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyComponent } from './containers/survey/survey.component';
import { SurveyRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SurveyRoutingModule
  ],
  declarations: [SurveyComponent],
  exports: [SurveyComponent],
  providers: []
})
export class SurveyModule { }
