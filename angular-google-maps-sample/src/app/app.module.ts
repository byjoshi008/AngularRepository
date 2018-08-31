import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtTCQEyn25ShBcjYJ0_65-SctGG7ap6Y'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
