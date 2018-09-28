import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { environment } from '../environments/environment.prod';
import { SurveyData } from './data/survey-data';
import { HttpClientModule } from '@angular/common/http';

import { reducers, metaReducers } from './state';
import { HomePageComponent } from './home-page/home-page.component';
import { SurveysEffects } from './state/effects/surveys.effect';
import { SurveyService } from './services/survey.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(SurveyData),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([SurveysEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),
    StoreDevtoolsModule.instrument({
      name: 'Survey App Devtools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
