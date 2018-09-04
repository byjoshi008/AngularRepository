import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { EventMapPageComponent } from './event-map-page/event-map-page.component';
import { EventMapRoutingModule } from './event-map.routing';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    SharedModule,
    EventMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtTCQEyn25ShBcjYJ0_65-SctGG7ap6Y'
    })
  ],
  declarations: [EventMapPageComponent]
})
export class EventMapModule {}
