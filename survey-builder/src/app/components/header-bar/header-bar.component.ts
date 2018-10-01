import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  @Input() showBackBtn = true;

  constructor(private readonly location: Location) { }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

}
