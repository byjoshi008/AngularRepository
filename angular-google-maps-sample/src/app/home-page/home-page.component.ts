import { Component, OnInit } from '@angular/core';
import { ISupplyEvent } from '../models/event.models';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../models/app-state.model';
import { Observable } from 'rxjs';
import * as fromAppStore from '../state/app.reducer';
import * as appActions from '../state/app.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  eventList$: Observable<ISupplyEvent[]>;
  // errorMessage$: Observable<string>;

  constructor(private store: Store<IAppState>, private router: Router) {}

  ngOnInit() {
    this.eventList$ = this.store.pipe(select(fromAppStore.getEventList));

    // this.errorMessage$ = this.store.pipe(select(fromAppStore.getError));

    this.store.dispatch(new appActions.Load());
  }

  selectEvent(eventid: string) {
    this.store.dispatch(new appActions.SelectEvent(eventid));
    this.router.navigate(['/event-map']);
  }
}
