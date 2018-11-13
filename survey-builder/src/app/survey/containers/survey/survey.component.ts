import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from '../../survey.service';
import { Survey } from 'src/app/models/survey.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  survey: Survey;
  constructor(
    private readonly surveyService: SurveyService,
    private readonly router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.survey = this.surveyService.getSurvey();
  }

}
