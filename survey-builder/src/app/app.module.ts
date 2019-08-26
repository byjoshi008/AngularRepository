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
import { AppService } from './services/app.service';
import { SurveyEditorModule } from './survey-editor/survey-editor.module';
import { SurveyModule } from './survey/survey.module';
import * as components from './components';
import * as containers from './containers';
import { SurveyService } from './survey/survey.service';


@NgModule({
  declarations: [
    AppComponent,
    components.HeaderBarComponent,
    components.SurveyListComponent,
    components.StartSurveyComponent,
    containers.HomePageComponent,
    containers.SurveyEditorComponent,
    containers.SurveyPageComponent,
    containers.SurveyContainerComponent
  ],
  imports: [
    BrowserModule,
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
    SurveyEditorModule,
    SurveyModule,
    AppRoutingModule
  ],
  providers: [AppService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
