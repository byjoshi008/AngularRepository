import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveySection } from '../../models/survey.model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  @Input() sections: SurveySection[];
  @Output() select: EventEmitter<SurveySection> = new EventEmitter<SurveySection>();
  selectedSection: SurveySection;

  constructor() { }

  ngOnInit() { }

  handleSectionClick(section: SurveySection) {
    this.selectedSection = section;
    this.select.emit(section);
  }

}
