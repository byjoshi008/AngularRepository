import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SurveyService } from '../../../services/survey.service';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as fromActions from '../actions/survey.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Survey } from '../../../models/survey.model';
import * as fromRootActions from '../../../state/actions';

@Injectable()
export class SurveyEditorEffects {
    constructor(private actions$: Actions, private surveyService: SurveyService) { }

    @Effect()
    getSurvey$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.SurveyActionTypes.GetSurvey),
        mergeMap((action: fromActions.GetSurvey) => {
            let survey$: Observable<Survey>;
            if (action.payload === 'new') {
                survey$ = of({
                    id: 0,
                    name: 'Survey Title',
                    description: '',
                    sections: []
                });
            } else {
                survey$ = this.surveyService.getSurvey(action.payload);
            }
            return survey$.pipe(
                map((survey: Survey) => new fromActions.GetSurveySuccess(survey)),
                catchError(err => of(new fromRootActions.SetErrorMessage(err)))
            );
        }
        )
    );

    @Effect()
    saveSurvey$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.SurveyActionTypes.SaveSurvey),
        mergeMap((action: fromActions.SaveSurvey) => {
            let survey$: Observable<Survey>;
            if (action.payload.id === 0) {
                survey$ = this.surveyService.createSurvey(action.payload);
            } else {
                survey$ = this.surveyService.updateSurvey(action.payload);
            }
            return survey$.pipe(
                map((survey: Survey) => new fromActions.SaveSurveySuccess(survey)),
                catchError(err => of(new fromRootActions.SetErrorMessage(err)))
            );
        }
        )
    );
}
