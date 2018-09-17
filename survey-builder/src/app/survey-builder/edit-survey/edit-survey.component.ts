import { Component, OnInit } from '@angular/core';
import { Survey, SurveySection } from '../../models/survey.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-survey',
  templateUrl: './edit-survey.component.html',
  styleUrls: ['./edit-survey.component.css']
})
export class EditSurveyComponent implements OnInit {

  survey: Survey;
  isChanged = false;
  currentSection: SurveySection;

  constructor(private readonly location: Location) { }

  ngOnInit() {
    this.survey = {
      id: 'new',
      name: 'Survey Title',
      description: 'Survey Description',
      sections: []
    };
  }

  goBack() {
    this.location.back();
  }

  addNewSection() {
    const section: SurveySection = {
      id: this.survey.sections.length + 1,
      title: 'New Section',
      description: '',
      questions: []
    };
    this.survey.sections.push(section);
    this.currentSection = section;
  }

  sectionSelect(section: SurveySection) {
    this.currentSection = section;
  }

  surveyNameChange(value: string) {
    this.survey.name = value;
    this.isChanged = true;
  }

  surveyDescriptionChange(value: string) {
    this.survey.description = value;
    this.isChanged = true;
  }

  sectionChange() {
    this.isChanged = true;
  }

}
