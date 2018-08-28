import { Component, OnInit, HostBinding } from '@angular/core';
import * as componentAnimation from './animations';

@Component({
  selector: 'app-animation3',
  templateUrl: 'animation3.component.html',
  styleUrls: ['animation3.component.css'],
  animations: [
    componentAnimation.focusPanelTrigger,
    componentAnimation.inputHintTrigger,
    componentAnimation.listAnimationTrigger,
    componentAnimation.listItemTrigger
  ]
})
export class Animation3Component implements OnInit {
  @HostBinding('@listAnimation')
  animation = '';

  state = 'inactive';
  items = ['Have Breakfast', 'Pack Office Bag'];
  constructor() {}

  ngOnInit() {}

  toggleFocus() {
    this.state = this.state === 'inactive' ? 'active' : 'inactive';
  }

  submitItem(event) {
    if (event.target.value) {
      this.items.push(event.target.value);
    }
    event.target.value = '';
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
