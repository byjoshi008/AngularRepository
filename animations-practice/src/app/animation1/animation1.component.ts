import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-animation1',
  templateUrl: 'animation1.component.html',
  styleUrls: ['animation1.component.css'],
  animations: [
    trigger('btn1Trigger', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.5)' })),
      transition('small => large', animate('500ms ease-in')),
      transition('large => small', animate('500ms ease-out'))
    ]),
    trigger('btn2Trigger', [
      state('small', style({ transform: 'scale(1)' })),
      state('large', style({ transform: 'scale(1.5)' })),
      state('extra-large', style({ transform: 'scale(2)' })),
      transition('* => *', animate('500ms ease-in'))
    ]),
    trigger('list1Trigger', [
      state('fadeIn', style({ opacity: '1' })),
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(20px)' }),
        animate('500ms')
      ])
    ])
  ]
})
export class Animation1Component implements OnInit {
  btn1State = 'small';
  btn2State = 'small';
  list1State = 'fadeIn';
  items = ['item 1', 'item 2', 'item 3'];

  constructor() {}

  ngOnInit() {}

  changeBtn1State() {
    this.btn1State = this.btn1State === 'small' ? 'large' : 'small';
  }

  changeBtn2State() {
    if (this.btn2State === 'small') {
      this.btn2State = 'large';
    } else if (this.btn2State === 'large') {
      this.btn2State = 'extra-large';
    } else {
      this.btn2State = 'small';
    }
  }

  changeList1State() {
    this.items.push('Another Item');
    this.list1State = 'fadeIn';
  }
}
