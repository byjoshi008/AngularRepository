import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent, SurveyEditorComponent } from './containers';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'survey-editor', component: SurveyEditorComponent },
    { path: 'edit-survey/:surveyid', component: SurveyEditorComponent }
    // { path: 'edit-survey', loadChildren: './survey-editor/survey-editor.module#SurveyEditorModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
