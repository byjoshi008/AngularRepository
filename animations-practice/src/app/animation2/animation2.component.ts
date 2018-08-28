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
  selector: 'app-animation2',
  templateUrl: 'animation2.component.html',
  styleUrls: ['animation2.component.css'],
  animations: [
    trigger('list1Trigger', [
      state('fadeIn', style({ opacity: '1' })),
      transition('void => *', [
        style({ opacity: '0', transform: 'translateY(50px)' }),
        animate('500ms 0s ease-out')
      ])
    ]),
    trigger('list2Trigger', [
      state('fadeIn', style({ opacity: '1' })),
      transition('void => *', [
        animate(
          1000,
          keyframes([
            style({ opacity: 0, transform: 'translateY(-30px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(10px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ]),
    trigger('textTrigger', [
      state('initial', style({ opacity: 0 })),
      state('displaytext', style({ opacity: 1 })),
      transition('* => displaytext', [animate('100ms')]),
      transition('displaytext => initial', [
        animate(
          '1000ms 2s ease-in',
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({
              opacity: 0.5,
              transform: 'translateX(-10px)',
              offset: 0.3
            }),
            style({ opacity: 0, transform: 'translateX(-40px)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class Animation2Component implements OnInit {
  list1State = 'fadeIn';
  list2State = 'fadeIn';

  textState = 'initial';

  items1 = [];
  items2 = [];

  animDetails = '';

  constructor() {}

  ngOnInit() {}

  changeList1State() {
    this.items1.push('Another Item');
    this.list1State = 'fadeIn';
  }

  changeList2State() {
    this.items2.push('Another Item');
    this.list2State = 'fadeIn';
  }

  animStart(event: any) {
    this.textState = 'displaytext';
    this.animDetails = 'Animation Started';
  }

  animDone(event: any) {
    this.animDetails = `Last animation took ${event.totalTime}ms`;
    this.textState = 'initial';
  }
}
