import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SurveySection } from '../../models/survey.model';

@Component({
  selector: 'app-section-editor',
  templateUrl: './section-editor.component.html',
  styleUrls: ['./section-editor.component.css']
})
export class SectionEditorComponent implements OnInit {

  @Input() section: SurveySection;
  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  sectionTitleChange(value: string) {
    this.section.title = value;
    this.change.emit();
  }

  sectionDescriptionChange(value: string) {
    this.section.description = value;
    this.change.emit();
  }

}
