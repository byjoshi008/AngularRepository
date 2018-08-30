import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'filter-text',
  templateUrl: './filter-text.component.html',
  styleUrls: ['./filter-text.component.css']
})
export class FilterTextComponent implements OnInit {
  @Output()
  changed: EventEmitter<string>;
  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.filter);
  }

  ngOnInit() {
    // componentHandler.upgradeDom();
  }
}
