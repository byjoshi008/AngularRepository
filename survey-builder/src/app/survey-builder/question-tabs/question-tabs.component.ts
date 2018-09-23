import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { SurveyQuestion } from '../../models/survey.model';

@Component({
  selector: 'app-question-tabs',
  templateUrl: './question-tabs.component.html',
  styleUrls: ['./question-tabs.component.css']
})
export class QuestionTabsComponent implements OnInit {

  @HostBinding('class') classes = 'd-flex flex-stretch';

  @Input() questions: SurveyQuestion[];
  @Input() isEditable = true;
  @Output() removeQuestion: EventEmitter<SurveyQuestion> = new EventEmitter<SurveyQuestion>();

  currentQuestion: SurveyQuestion;

  constructor() { }

  ngOnInit() { }

  selectQuestion(question: SurveyQuestion) {
    if (this.currentQuestion !== question) {
      this.currentQuestion = question;
    }
  }

  questionRemove(event: Event, question: SurveyQuestion) {
    event.stopPropagation();
    if (this.currentQuestion === question) {
      this.currentQuestion = null;
    }
    this.removeQuestion.emit(question);
  }

}
