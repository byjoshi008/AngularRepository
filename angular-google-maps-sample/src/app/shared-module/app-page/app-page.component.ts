import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {
  isHomePage = true;
  appName = 'Bottled Water Supply';
  selectedEvent = {
    event_number: '20000001',
    short_text: 'Supply bottled water to Lincoln High Street'
  };

  constructor() {}

  ngOnInit() {}
}
