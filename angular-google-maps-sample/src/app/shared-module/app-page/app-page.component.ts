import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../models/app-state.model';
import { Observable } from 'rxjs';
import { ISupplyEvent } from '../../models/event.models';

import * as fromAppStore from '../../state/app.reducer';
import { takeWhile } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit, OnDestroy {
  componentActive = true;
  isHomePage = true;
  appName = 'Bottled Water Supply';
  selectedEvent$: Observable<ISupplyEvent>;

  constructor(private store: Store<IAppState>, private location: Location) {}

  ngOnInit() {
    this.selectedEvent$ = this.store.pipe(select(fromAppStore.getCurrentEvent));
    this.store
      .pipe(
        select(fromAppStore.getIsHomePage),
        takeWhile(() => this.componentActive)
      )
      .subscribe(isHomePage => (this.isHomePage = isHomePage));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  goBack() {
    this.location.back();
  }
}
