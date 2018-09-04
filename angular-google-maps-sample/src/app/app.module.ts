import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing';
import { SharedModule } from './shared-module/shared-module.module';
import { environment } from '../environments/environment';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EventData } from './data/events.data';
import { metaReducers, initialState } from './state/app.reducer';
import { AppService } from './app.service';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EventData),
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(
      {},
      { metaReducers: metaReducers, initialState: initialState }
    ),
    StoreDevtoolsModule.instrument({
      name: 'Angular Google App - DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
