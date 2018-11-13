import { Component } from '@angular/core';


@Component({
  selector: 'app-survey-page',
  template: `
  <div class="d-flex flex-column flex-stretch py-3 bg-light overflow-auto">
    <div class="d-flex flex-column p-3 col-12 col-sm-10 col-md-8 col-lg-6 mx-auto shadow bg-white">
      <router-outlet *ngIf="!isSurveyStart"></router-outlet>
    </div>
  </div>
  `
})
export class SurveyPageComponent {

}
