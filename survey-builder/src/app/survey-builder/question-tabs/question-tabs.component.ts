import { Component, OnInit } from '@angular/core';
import { SurveyQuestion } from '../../models/survey.model';
import { Store, select } from '@ngrx/store';
import * as state from '../state/survey.state';
import { Observable } from 'rxjs';
import { SelectQuestion, DeleteQuestion } from '../state/actions';

@Component({
  selector: 'app-question-tabs',
  templateUrl: './question-tabs.component.html',
  styleUrls: ['./question-tabs.component.css']
})
export class QuestionTabsComponent implements OnInit {

  questions: SurveyQuestion[] = [];
  currentQuestionId: number;

  constructor(private readonly store: Store<state.State>) { }

  ngOnInit() {
    this.store.pipe(select(state.getQuestions)).subscribe(
      questions => this.questions = questions
    );

    this.store.pipe(select(state.getCurrentQuestionId)).subscribe(
      questionId => this.currentQuestionId = questionId
    );
  }

  selectQuestion(questionId: number) {
    this.store.dispatch(new SelectQuestion(questionId));
  }

  questionRemove(event: Event, questionId: number) {
    event.stopPropagation();
    this.store.dispatch(new DeleteQuestion(questionId));
  }

}
