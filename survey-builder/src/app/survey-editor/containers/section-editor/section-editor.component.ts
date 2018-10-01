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

  ngOnInit() {
    // this.store.pipe(select(fromState.getSection)).subscribe(
    //   section => this.section = section
    // );

    // this.store.pipe(select(fromState.getCurrentQuestionId)).subscribe(
    //   questionId => {
    //     if (!questionId) {
    //       this.currentQuestion = null;
    //       return;
    //     }
    //     if (this.section) {
    //       this.currentQuestion = this.section.questions.find(x => x.id === questionId);
    //     }
    //   }
    // );
  }

  sectionTitleChange(value: string) {
    // this.section = { ...this.section, title: value };
    // this.store.dispatch(new fromAction.SectionUpdated(this.section));
    this.section.title = value;
    this.update.emit();
  }

  sectionDescriptionChange(value: string) {
    // this.section = { ...this.section, title: value };
    // this.store.dispatch(new fromAction.SectionUpdated(this.section));
    this.section.description = value;
    this.update.emit();
  }

  closeSection() {
    // this.store.dispatch(new fromAction.CloseSectionEditor());
    this.close.emit();
  }

  closeQuestion() {
    // this.store.dispatch(new fromAction.CloseQuestionEditor());
    this.currentQuestion = null;
  }

  addQuestion() {
    // this.store.dispatch(new fromAction.AddQuestion());
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
    // this.store.dispatch(new fromAction.SelectQuestion(questionId));
    this.currentQuestion = this.section.questions.find(x => x.id === questionId);
  }

  deleteQuestion(questionId: number) {
    // this.store.dispatch(new fromAction.DeleteQuestion(questionId));
    if (this.currentQuestion && this.currentQuestion.id === questionId) {
      this.currentQuestion = null;
    }
    this.section.questions = this.section.questions.filter(x => x.id !== questionId);
    this.update.emit();
  }

  changeQuestionOrder(questions: SurveyQuestion[]) {
    // this.store.dispatch(new fromAction.ChangeQuestionOrder(questions));
    questions.forEach((x, index) => x.id = index + 1);
    this.section.questions = questions;
    this.update.emit();
  }

  updateQuestion(question: SurveyQuestion) {
    // this.store.dispatch(new fromAction.QuestionUpdated(question));
    this.section.questions = this.section.questions.map(x => x.id === question.id ? question : x);
    this.update.emit();
  }
}
