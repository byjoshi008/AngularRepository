import { Component, OnInit } from '@angular/core';
import { SurveySection, SurveyQuestion } from '../../../models/survey.model';
import { Store, select } from '@ngrx/store';
import * as fromState from '../../state';
import * as fromAction from '../../state/actions';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  section: SurveySection;
  currentQuestion: SurveyQuestion;

  constructor(private readonly store: Store<fromState.State>) { }

  ngOnInit() {
    this.store.pipe(select(fromState.getSection)).subscribe(
      section => this.section = section
    );

    this.store.pipe(select(fromState.getCurrentQuestionId)).subscribe(
      questionId => {
        if (!questionId) {
          this.currentQuestion = null;
          return;
        }
        if (this.section) {
          this.currentQuestion = this.section.questions.find(x => x.id === questionId);
        }
      }
    );
  }

  sectionTitleChange(value: string) {
    this.store.dispatch(new fromAction.SectionUpdated({ ...this.section, title: value }));
  }

  sectionDescriptionChange(value: string) {
    this.store.dispatch(new fromAction.SectionUpdated({ ...this.section, description: value }));
  }

  closeSection() {
    this.store.dispatch(new fromAction.CloseSectionEditor());
  }

  closeQuestion() {
    this.store.dispatch(new fromAction.CloseQuestionEditor());
  }

  addQuestion() {
    this.store.dispatch(new fromAction.AddQuestion());
  }

  selectQuestion(questionId: number) {
    this.store.dispatch(new fromAction.SelectQuestion(questionId));
  }

  deleteQuestion(questionId: number) {
    this.store.dispatch(new fromAction.DeleteQuestion(questionId));
  }

  changeQuestionOrder(questions: SurveyQuestion[]) {
    this.store.dispatch(new fromAction.ChangeQuestionOrder(questions));
  }

  updateQuestion(question: SurveyQuestion) {
    this.store.dispatch(new fromAction.QuestionUpdated(question));
  }
}
