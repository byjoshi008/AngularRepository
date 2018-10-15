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

  questionTextChange(value: string) {
    this.question = { ...this.question, text: value };
    this.questionUpdate.emit(this.question);
  }

  questionDescriptionChange(value: string) {
    console.log(value);
    this.question = { ...this.question, description: value };
    this.questionUpdate.emit(this.question);
  }

  questionOutputChange(value: string) {
    this.question = { ...this.question, output: value };
    this.questionUpdate.emit(this.question);
  }

  questionAttachmentChange(value: boolean) {
    this.question = { ...this.question, attachments: value };
    this.questionUpdate.emit(this.question);
  }

  questionTypeChange(value: string) {
    this.question = { ...this.question, type: value };
    this.questionUpdate.emit(this.question);
  }

  questionMandatoryChange(value: boolean) {
    this.question = { ...this.question, mandatory: value };
    this.questionUpdate.emit(this.question);
  }

  questionErrorMessageChange(value: string) {
    this.question = { ...this.question, error_message: value };
    this.questionUpdate.emit(this.question);
  }
}
