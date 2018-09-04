import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as appActions from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private appService: AppService, private actions$: Actions) {}

  @Effect()
  loadEvents$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.Load),
    mergeMap(action =>
      this.appService.getEvents().pipe(
        map(events => new appActions.LoadSuccess(events)),
        catchError(err => of(new appActions.LoadFail(err)))
      )
    )
  );
}
