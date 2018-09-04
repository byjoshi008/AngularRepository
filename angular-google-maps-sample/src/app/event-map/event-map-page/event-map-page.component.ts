import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAppState } from '../../models/app-state.model';
import { Store, select } from '@ngrx/store';
import { ISupplyEvent } from '../../models/event.models';
import { takeWhile } from 'rxjs/operators';

import * as fromAppStore from '../../state/app.reducer';
import * as appActions from '../../state/app.actions';

@Component({
  selector: 'app-event-map-page',
  templateUrl: './event-map-page.component.html',
  styleUrls: ['./event-map-page.component.css']
})
export class EventMapPageComponent implements OnInit, OnDestroy {
  componentActive = true;
  event: ISupplyEvent;

  iconRed = {
    url: 'assets/map-icons/home_marker_red.svg',
    scaledSize: {
      width: 40,
      height: 40
    }
  };

  iconGreen = {
    url: 'assets/map-icons/home_marker_green.svg',
    scaledSize: {
      width: 40,
      height: 40
    }
  };

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store
      .pipe(
        select(fromAppStore.getCurrentEvent),
        takeWhile(() => this.componentActive)
      )
      .subscribe(event => (this.event = event));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  markAsDelivered(locationId: string) {
    this.store.dispatch(new appActions.MarkLocationSupplied(locationId));
  }
}
