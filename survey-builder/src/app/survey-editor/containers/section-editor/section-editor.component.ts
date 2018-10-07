import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveySection, SurveyQuestion } from '../../../models/survey.model';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  @Input() section: SurveySection;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() update: EventEmitter<void> = new EventEmitter<void>();

  currentQuestion: SurveyQuestion;

  constructor() { }

  ngOnInit() { }

  sectionTitleChange(value: string) {
    this.section.title = value;
    this.update.emit();
  }

  sectionDescriptionChange(value: string) {
    this.section.description = value;
    this.update.emit();
  }

  closeSection() {
    this.close.emit();
  }

  closeQuestion() {
    this.currentQuestion = null;
  }

  addQuestion() {
    const questionId = this.section.questions.length + 1;
    const newQuestion = {
      id: questionId,
      text: '',
      description: '',
      type: '',
      output: `question${this.section.id}_${questionId}`,
      attachments: false
    };
    this.section.questions = [...this.section.questions, newQuestion];
    this.currentQuestion = newQuestion;
    this.update.emit();
  }

  selectQuestion(questionId: number) {
    this.currentQuestion = this.section.questions.find(x => x.id === questionId);
  }

  deleteQuestion(questionId: number) {
    if (this.currentQuestion && this.currentQuestion.id === questionId) {
      this.currentQuestion = null;
    }
    this.section.questions = this.section.questions.filter(x => x.id !== questionId);
    this.update.emit();
  }

  changeQuestionOrder(questions: SurveyQuestion[]) {
    questions.forEach((x, index) => x.id = index + 1);
    this.section.questions = questions;
    this.update.emit();
  }

  updateQuestion(question: SurveyQuestion) {
    this.section.questions = this.section.questions.map(x => x.id === question.id ? question : x);
    this.update.emit();
  }
}
