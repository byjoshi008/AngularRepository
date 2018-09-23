import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';

const routes: Routes = [
    { path: '', component: SurveyListComponent },
    {
        path: 'edit-survey', children: [
            { path: ':id', component: EditSurveyComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SurveyBuilderRoutingModule { }
