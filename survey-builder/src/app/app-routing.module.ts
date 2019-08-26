import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import * as containers from './containers';
import { SurveyModule } from './survey/survey.module';
import * as components from './components';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: containers.HomePageComponent },
  { path: 'survey-editor', component: containers.SurveyEditorComponent },
  { path: 'edit-survey/:surveyid', component: containers.SurveyEditorComponent },
  {
    path: 'surveys',
    component: containers.SurveyContainerComponent,
    children: [
      { path: '', component: components.SurveyListComponent },
      { path: 'start-survey', component: components.StartSurveyComponent },
      {
        path: ':surveyid',
        component: containers.SurveyPageComponent,
        loadChildren: () => SurveyModule
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
