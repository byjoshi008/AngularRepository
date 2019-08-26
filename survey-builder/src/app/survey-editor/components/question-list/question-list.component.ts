import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyQuestion } from '../../../models/survey.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  @Input() questions: SurveyQuestion[];
  @Output() questionSelect: EventEmitter<number> = new EventEmitter<number>();
  @Output() questionDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() questionOrderChange: EventEmitter<SurveyQuestion[]> = new EventEmitter<SurveyQuestion[]>();

  constructor() { }

  ngOnInit() { }

  handleQuestionSelect(questionId: number) {
    this.questionSelect.emit(questionId);
  }

  handleQuestionDelete(event: Event, questionId: number) {
    event.stopPropagation();
    this.questionDelete.emit(questionId);
  }

  handleQuestionOrderChange(questions: SurveyQuestion[]) {
    this.questionOrderChange.emit(questions);
  }

}
