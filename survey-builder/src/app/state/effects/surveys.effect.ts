import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppService } from '../../services/app.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromRootActions from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Survey } from '../../models/survey.model';

@Injectable()
export class SurveysEffects {
  constructor(private actions$: Actions, private appService: AppService) { }

  @Effect()
  loadSurveys$: Observable<Action> = this.actions$.pipe(
    ofType(fromRootActions.SurveysActionTypes.LoadSurveys),
    mergeMap((action: fromRootActions.LoadSurveys) =>
      this.appService.getSurveys().pipe(
        map((surveys: Survey[]) => new fromRootActions.LoadSurveysSuccess(surveys)),
        catchError(err => of(new fromRootActions.SetErrorMessage(err)))
      )
    )
  );

  @Effect()
  saveSurvey$: Observable<Action> = this.actions$.pipe(
    ofType(fromRootActions.SurveysActionTypes.SaveSurvey),
    mergeMap((action: fromRootActions.SaveSurvey) => {
      let survey$: Observable<Survey>;
      let isNew = false;
      if (action.payload.id === 0) {
        isNew = true;
        survey$ = this.appService.createSurvey(action.payload);
      } else {
        survey$ = this.appService.updateSurvey(action.payload);
      }
      return survey$.pipe(
        map((survey: Survey) => new fromRootActions.SaveSurveySuccess(survey, isNew)),
        catchError(err => of(new fromRootActions.SetErrorMessage(err)))
      );
    }
    )
  );
}
