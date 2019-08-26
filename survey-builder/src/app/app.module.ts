import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment.prod';
import { SurveyData } from './data/survey-data';
import { HttpClientModule } from '@angular/common/http';

import { reducers, metaReducers } from './state';
import { SurveysEffects } from './state/effects/surveys.effect';
import { SurveyService } from './services/survey.service';
import { SurveyEditorModule } from './survey-editor/survey-editor.module';
import * as components from './components';
import * as containers from './containers';

@NgModule({
  declarations: [
    AppComponent,
    components.HeaderBarComponent,
    containers.HomePageComponent,
    containers.SurveyEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    }),
    SurveyEditorModule
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
