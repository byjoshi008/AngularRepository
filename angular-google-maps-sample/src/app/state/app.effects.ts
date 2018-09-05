import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as moment from 'moment';

import * as appActions from './app.actions';
import { IAppState } from '../models/app-state.model';
import { ISupplyEvent } from '../models/event.models';

@Injectable()
export class AppEffects {
  constructor(private appService: AppService, private actions$: Actions, private store: Store<IAppState>) { }

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

  @Effect()
  updateSupplyLocation$: Observable<Action> = this.actions$.pipe(
    ofType(appActions.AppActionTypes.LocationSupplied),
    map((action: appActions.LocationSupplied) => action.payload),
    withLatestFrom(this.store, (locationid: string, state: IAppState) => {
      const event: ISupplyEvent = state.eventList.find(
        e => e.id === state.currentEventId
      );
      const supplyLocations = event.supplyLocations.map(
        s => {
          if (s.id === locationid) {
            s.is_supplied = true;
            s.supplied_at = moment().format('YYYY-MM-DDTHH:mm:ss');
          }
          return s;
        }
      );
      return { ...event, supplyLocations };
    }),
    mergeMap((event: ISupplyEvent) =>
      this.appService.updateSupplyLocation(event).pipe(
        map(updatedEvent => new appActions.LocationSuppliedSuccess(updatedEvent))
      )
    )
  );
}
