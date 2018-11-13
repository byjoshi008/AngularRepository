import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SurveyComponent } from './containers/survey/survey.component';

const routes: Routes = [
  {
    path: 'survey', component: SurveyComponent, children: []
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
