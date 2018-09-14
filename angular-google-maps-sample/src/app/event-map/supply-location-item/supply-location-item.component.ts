import { Component, OnInit, Input, Output } from '@angular/core';
import { ISupplyLocation } from '../../models/event.models';

@Component({
  selector: 'app-supply-location-item',
  templateUrl: './supply-location-item.component.html',
  styleUrls: ['./supply-location-item.component.css']
})
export class SupplyLocationItemComponent implements OnInit {

  @Input() supplyLocation: ISupplyLocation;

  constructor() { }

  ngOnInit() { }
}
