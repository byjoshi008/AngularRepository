import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveySection } from '../../models/survey.model';
import { Store, select } from '@ngrx/store';
import * as state from '../state/survey.state';
import * as fromAction from '../state/actions';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  sections: SurveySection[];
  currentSectionId: number;

  constructor(private readonly store: Store<state.State>) { }

  ngOnInit() {
    this.store.pipe(select(state.getSections)).subscribe(
      sections => this.sections = sections
    );

    this.store.pipe(select(state.getCurrentSectionId)).subscribe(
      sectionid => this.currentSectionId = sectionid
    );
  }

  handleSectionClick(sectionid: number) {
    this.store.dispatch(new fromAction.SelectSection(sectionid));
  }

  deleteSection(event: Event, sectionid: number) {
    event.stopPropagation();
    this.store.dispatch(new fromAction.DeleteSection(sectionid));
  }
}
