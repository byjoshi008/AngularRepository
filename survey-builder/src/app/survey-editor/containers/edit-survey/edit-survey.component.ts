import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Survey, SurveyValidation, SurveySection, SurveyQuestion } from '../../../models/survey.model';
import { SectionEditorComponent } from '../section-editor/section-editor.component';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  @Input() survey: Survey;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('sectionEditor') sectionEditor: SectionEditorComponent;

  isChanged = false;
  currentSectionId: number;
  showValidations = false;
  showErrorPanel = false;
  currentSection: SurveySection;

  validationErrors: SurveyValidation[] = null;

  constructor() { }

  ngOnInit() { }

  surveyNameChange(value: string) {
    this.survey.name = value;
    this.isChanged = true;
  }

  surveyDescriptionChange(value: string) {
    this.survey.description = value;
    this.isChanged = true;
  }

  saveSurvey(completeFlag: boolean, exitFlag: boolean) {
    let saveFlag = true;
    if (completeFlag) {
      saveFlag = this.validateSurvey();
    }
    if (saveFlag) {
      this.survey.is_complete = completeFlag;
      this.save.emit(exitFlag);
    }
  }

  addNewSection() {
    const sectionId = this.survey.sections.length + 1;
    const newSection = {
      id: sectionId,
      title: 'New Section',
      description: '',
      questions: []
    };
    this.survey.sections = [...this.survey.sections, newSection];
    this.currentSection = newSection;
    this.currentSectionId = sectionId;
    this.sectionEditor.currentQuestion = null;
    this.isChanged = true;
  }

  selectSection(sectionId) {
    const section = this.survey.sections.find(x => x.id === sectionId);
    this.currentSection = { ...section };
    this.currentSectionId = sectionId;
    this.sectionEditor.currentQuestion = null;
  }

  deleteSection(sectionId) {
    if (sectionId === this.currentSectionId) {
      this.currentSection = null;
    }
    this.survey.sections = this.survey.sections.filter(x => x.id !== sectionId);
    this.isChanged = true;
  }

  changeSectionOrder(sections) {
    this.currentSectionId = this.currentSectionId
      ? sections.findIndex(x => x.id === this.currentSectionId) + 1
      : null;
    const newSections = sections.map((x, index) => ({ ...x, id: index + 1 }));
    this.survey.sections = newSections;
    this.isChanged = true;
  }

  updateSection(section: SurveySection) {
    this.isChanged = true;
    this.survey.sections = this.survey.sections.map(x => x.id === section.id ? section : x);
  }

  closeSectionEditor() {
    this.currentSection = null;
    this.currentSectionId = null;
  }

  gotoError(item: SurveyValidation) {
    if (item.section) {
      this.currentSectionId = item.section;
      this.currentSection = this.survey.sections.find(x => x.id === item.section);
      if (item.question) {
        this.sectionEditor.currentQuestion = this.currentSection.questions.find(x => x.id === item.question);
      } else {
        this.sectionEditor.currentQuestion = null;
      }
    }
    this.showErrorPanel = false;
  }

  private validateSurvey(): boolean {
    let surveyErrors: SurveyValidation[] = [];

    if (!this.survey.name) {
      surveyErrors.push({ message: 'Survey title is not provided' });
    }
    if (!this.survey.sections || this.survey.sections.length <= 0) {
      surveyErrors.push({ message: 'No section is added to the survey' });
    } else {
      surveyErrors = surveyErrors.concat(this.validateSections());
    }

    if (surveyErrors.length === 0) {
      return true;
    }

    this.validationErrors = surveyErrors;
    this.showValidations = true;
    return false;
  }

  private validateSections(): SurveyValidation[] {
    let sectionErrors: SurveyValidation[] = [];
    const sections = this.survey.sections;

    sections.forEach(section => {
      if (!section.title) {
        sectionErrors.push({
          section: section.id,
          message: `Section ${section.id} - Title not provided`
        });
      }

      if (!section.questions || section.questions.length <= 0) {
        sectionErrors.push({
          section: section.id,
          message: `Section ${section.id} - No question is added to the section`
        });
      } else {
        sectionErrors = sectionErrors.concat(this.validateQuestions(section));
      }
    });
    return sectionErrors;
  }

  private validateQuestions(section: SurveySection): SurveyValidation[] {
    const questionErrors: SurveyValidation[] = [];
    section.questions.forEach(question => {
      if (!question.text) {
        questionErrors.push({
          section: section.id,
          question: question.id,
          message: `Section ${section.id}, Question ${question.id} - Question text not provided`
        });
      }
      if (!question.type) {
        questionErrors.push({
          section: section.id,
          question: question.id,
          message: `Section ${section.id}, Question ${question.id} - Question type is not selected`
        });
      }
    });
    return questionErrors;
  }

}
