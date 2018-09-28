import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SurveyService } from '../../services/survey.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromRootActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Survey } from '../../models/survey.model';

@Injectable()
export class SurveysEffects {
    constructor(private actions$: Actions, private surveyService: SurveyService) { }

    @Effect()
    loadSurveys$: Observable<Action> = this.actions$.pipe(
        ofType(fromRootActions.SurveysActionTypes.LoadSurveys),
        mergeMap((action: fromRootActions.LoadSurveys) =>
            this.surveyService.getSurveys().pipe(
                map((surveys: Survey[]) => new fromRootActions.LoadSurveysSuccess(surveys)),
                catchError(err => of(new fromRootActions.SetErrorMessage(err)))
            )
        )
    );
}
