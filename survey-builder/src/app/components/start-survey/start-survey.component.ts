import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../survey/survey.service';
import { Survey } from 'src/app/models/survey.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-survey',
  templateUrl: './start-survey.component.html',
  styleUrls: ['./start-survey.component.css']
})
export class StartSurveyComponent implements OnInit {

  survey: Survey;

  constructor(
    private readonly surveyService: SurveyService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.survey = this.surveyService.getSurvey();
  }

  getTotalQuestions(): number {
    let count = 0;
    this.survey.sections.forEach(x => count += x.questions.length);
    return count;
  }

  startSurvey() {
    this.router.navigate([`/surveys/${this.survey.id}/survey`]);
  }

}
