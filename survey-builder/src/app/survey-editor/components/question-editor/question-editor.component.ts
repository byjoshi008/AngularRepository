import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveyQuestion } from '../../../models/survey.model';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {
  @Input() question: SurveyQuestion;
  @Output() questionUpdate: EventEmitter<SurveyQuestion> = new EventEmitter<SurveyQuestion>();

  constructor() { }

  ngOnInit() { }

  questionTextChange(value: string, question: SurveyQuestion) {
    this.questionUpdate.emit({ ...question, text: value });
  }

  questionDescriptionChange(value: string, question: SurveyQuestion) {
    this.questionUpdate.emit({ ...question, description: value });
  }

  questionOutputChange(value: string, question: SurveyQuestion) {
    this.questionUpdate.emit({ ...question, output: value });
  }

  questionAttachmentChange(value: boolean, question: SurveyQuestion) {
    this.questionUpdate.emit({ ...question, attachments: value });
  }

  questionTypeChange(value: string, question: SurveyQuestion) {
    this.questionUpdate.emit({ ...question, type: value });
  }
}
