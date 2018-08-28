import {
  trigger,
  style,
  transition,
  query,
  keyframes,
  animate,
  group,
  state,
  animateChild,
  stagger
} from '@angular/animations';

export let focusPanelTrigger = trigger('focusPanel', [
  state('inactive', style({ transform: 'scale(1)' })),
  state('active', style({ transform: 'scale(1.04)' })),
  transition('inactive => active', [
    group([query('@inputHint', animateChild()), animate('500ms ease-in')])
  ]),
  transition('active => inactive', [
    group([query('@inputHint', animateChild()), animate('500ms ease-out')])
  ])
]);

export let inputHintTrigger = trigger('inputHint', [
  state('inactive', style({ opacity: '0' })),
  state('active', style({ opacity: '1' })),
  transition('inactive => active', [
    animate(
      500,
      keyframes([
        style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])
    )
  ]),
  transition('active => inactive', [
    animate(
      500,
      keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.5 }),
        style({ opacity: 0, transform: 'translateY(100%)', offset: 1 })
      ])
    )
  ])
]);

export let listAnimationTrigger = trigger('listAnimation', [
  transition(':enter', [
    query('.listitem', style({ opacity: 0 }), { optional: true }),
    query(
      '.listitem',
      stagger(400, [
        animate(
          '500ms ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-15px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(10px)', offset: 0.7 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);

export let listItemTrigger = trigger('listItem', [
  transition(
    ':enter',
    animate(
      '500ms ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateY(-15px)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(10px)', offset: 0.7 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])
    )
  ),
  transition(
    ':leave',
    animate(
      '700ms ease-in',
      keyframes([
        style({ opacity: 1, transform: 'translateX(10px)', offset: 0 }),
        style({
          opacity: 0.5,
          transform: 'translateX(-30px)',
          offset: 0.7
        }),
        style({ opacity: 0, transform: 'translateX(-100%)', offset: 1 })
      ])
    )
  )
]);
