import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Survey, SurveyValidation, SurveySection } from '../../../models/survey.model';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  @Input() survey: Survey;
  @Output() save: EventEmitter<boolean> = new EventEmitter<boolean>();
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
    this.isChanged = true;
  }

  selectSection(sectionId) {
    this.currentSection = this.survey.sections.find(x => x.id === sectionId);
    this.currentSectionId = sectionId;
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
    sections.forEach((x, index) => x.id = index + 1);
    this.survey.sections = sections;
    this.isChanged = true;
  }

  updateSection() {
    this.isChanged = true;
  }

  closeSectionEditor() {
    this.currentSection = null;
    this.currentSectionId = null;
  }

  private validateSurvey(): boolean {
    const validationErrors: SurveyValidation[] = [];
    const sections = this.survey.sections;

    if (!this.survey.name) {
      validationErrors.push({ message: 'Survey title is not provided' });
    }
    if (!sections || sections.length <= 0) {
      validationErrors.push({ message: 'No section is added to the survey.' });
    }

    if (validationErrors.length === 0) {
      return true;
    }
    this.validationErrors = validationErrors;
    this.showValidations = true;
    return false;
  }

}
