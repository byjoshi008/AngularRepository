import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveySection } from '../../models/survey.model';
import { Store, select } from '@ngrx/store';
import * as state from '../state/survey.state';
import * as fromAction from '../state/actions';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  section: SurveySection;

  constructor(private readonly store: Store<state.State>) { }

  ngOnInit() {
    this.store.pipe(select(state.getSection)).subscribe(
      section => this.section = section
    );
  }

  sectionTitleChange(value: string) {
    this.store.dispatch(new fromAction.SectionUpdated({ ...this.section, title: value }));
  }

  sectionDescriptionChange(value: string) {
    this.store.dispatch(new fromAction.SectionUpdated({ ...this.section, description: value }));
  }

  close() {
    this.store.dispatch(new fromAction.CloseSectionEditor());
  }

  addQuestion() {
    this.section.questions = [...this.section.questions, {
      id: `Question ${this.section.questions.length + 1}`,
      text: `Question Text ${this.section.questions.length + 1}`,
      description: `Question Description ${this.section.questions.length + 1}`,
      type: '',
      output: ''
    }];
  }
}
