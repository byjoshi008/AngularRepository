import { Component, OnInit } from '@angular/core';
import { ISupplyEvent } from '../models/event.models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  eventList: ISupplyEvent[] = [
    {
      id: '1',
      event_number: '20000001',
      short_text: 'Supply to Lincoln High Street',
      status: 'Open',
      type: 'supply',
      created_at: '2018-08-31T11:15:00',
      location: {
        lat: 53.228242,
        long: -0.540731,
        location_name: 'High Street, Lincoln',
        location_type: ''
      },
      supplyLocations: [
        {
          lat: 53.228242,
          long: -0.540731,
          location_name: '203, High Street, Lincoln, LN5 7AU',
          location_type: ''
        },
        {
          lat: 53.22803,
          long: -0.540919,
          location_name: 'Lloyds Bank, 202, High Street, Lincoln, LN5 7AP',
          location_type: ''
        },
        {
          lat: 53.229058,
          long: -0.54053,
          location_name: '221, High Street, Lincoln, LN1 1TS',
          location_type: ''
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
