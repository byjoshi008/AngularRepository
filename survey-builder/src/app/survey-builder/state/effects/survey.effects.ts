import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SurveyService } from '../../survey.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromActions from '../actions/survey.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Survey } from '../../../models/survey.model';
import * as fromRootActions from '../../../reducers/app.actions';

@Injectable()
export class SurveyBuilderEffects {
    constructor(private actions$: Actions, private surveyService: SurveyService) { }

    @Effect()
    loadSurveys$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.SurveyActionTypes.LoadSurveys),
        mergeMap((action: fromActions.LoadSurveys) =>
            this.surveyService.getSurveys().pipe(
                map((surveys: Survey[]) => new fromActions.LoadSurveysSuccess(surveys)),
                catchError(err => of(new fromRootActions.SetErrorMessage(err)))
            )
        )
    );
}
