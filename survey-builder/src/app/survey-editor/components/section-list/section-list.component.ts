import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveySection } from '../../../models/survey.model';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  @Input() sections: SurveySection[];
  @Input() currentSectionId: number;
  @Output() sectionSelect: EventEmitter<number> = new EventEmitter<number>();
  @Output() sectionDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() sectionOrderChange: EventEmitter<SurveySection[]> = new EventEmitter<SurveySection[]>();

  constructor() { }

  ngOnInit() { }

  handleSectionSelect(sectionId: number) {
    this.sectionSelect.emit(sectionId);
  }

  handleSectionDelete(event: Event, sectionId: number) {
    event.stopPropagation();
    this.sectionDelete.emit(sectionId);
  }

  handleSectionOrderChange(sections: SurveySection[]) {
    this.sectionOrderChange.emit(sections);
  }
}
