import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private readonly router: Router) { }

  ngOnInit() {

  }

  gotoSurveyEditor() {
    this.router.navigate(['/survey-editor']);
  }

  gotoTakeSurvey() {
    this.router.navigate(['/surveys']);
  }
}
