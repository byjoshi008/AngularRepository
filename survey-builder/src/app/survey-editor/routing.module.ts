import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EditSurveyComponent } from './containers/edit-survey/edit-survey.component';

const routes: Routes = [
    { path: ':id', component: EditSurveyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyEditorRoutingModule { }
