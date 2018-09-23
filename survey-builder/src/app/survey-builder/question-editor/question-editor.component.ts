import { Component, OnInit, Input } from '@angular/core';
import { SurveyQuestion } from '../../models/survey.model';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {

  @Input() question: SurveyQuestion;

  constructor() { }

  ngOnInit() { }

}
