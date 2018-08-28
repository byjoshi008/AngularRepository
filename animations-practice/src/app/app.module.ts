import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing';

import { AppComponent } from './app.component';
import { Animation1Component } from './animation1/animation1.component';
import { Animation2Component } from './animation2/animation2.component';
import { Animation3Component } from './animation3/animation3.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    Animation1Component,
    Animation2Component,
    Animation3Component,
    HomePageComponent,
    PageHeaderComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
