import { Component, OnInit, Input } from '@angular/core';
import { SurveyQuestion } from '../../models/survey.model';
import { Observable } from 'rxjs';
import * as state from '../state/survey.state';
import { Store, select } from '@ngrx/store';
import * as fromAction from '../state/actions';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {

  question$: Observable<SurveyQuestion> = this.store.pipe(select(state.getQuestion));

  constructor(private readonly store: Store<state.State>) { }

  ngOnInit() { }

  questionTextChange(value: string, question: SurveyQuestion) {
    this.store.dispatch(new fromAction.QuestionUpdated({ ...question, text: value }));
  }

  questionDescriptionChange(value: string, question: SurveyQuestion) {
    this.store.dispatch(new fromAction.QuestionUpdated({ ...question, description: value }));
  }

  questionOutputChange(value: string, question: SurveyQuestion) {
    this.store.dispatch(new fromAction.QuestionUpdated({ ...question, output: value }));
  }

  questionAttachmentChange(value: boolean, question: SurveyQuestion) {
    this.store.dispatch(new fromAction.QuestionUpdated({ ...question, attachments: value }));
  }

  questionTypeChange(value: string, question: SurveyQuestion) {
    this.store.dispatch(new fromAction.QuestionUpdated({ ...question, type: value }));
  }

}
