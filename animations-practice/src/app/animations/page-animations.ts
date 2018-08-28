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
  stagger,
  sequence
} from '@angular/animations';

const pageInitialState = query(
  ':enter, :leave',
  style({ position: 'fixed', width: '100%', height: '100%' }),
  { optional: true }
);
const pageEnterInitialState = query(
  ':enter',
  style({ transform: 'translateX(100%)' }),
  {
    optional: true
  }
);
const pageLeaveChild = query(':leave', animateChild(), { optional: true });
const pageEnterChild = query(':enter', animateChild(), { optional: true });

const pageSlideRightTransition = [
  pageInitialState,
  pageEnterInitialState,
  sequence([
    pageLeaveChild,
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('400ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate(
            '400ms ease-in-out',
            style({ transform: 'translateX(-100%)' })
          )
        ],
        { optional: true }
      )
    ]),
    pageEnterChild
  ])
];

const pageSlideLeftTransition = [
  pageInitialState,
  pageEnterInitialState,
  sequence([
    pageLeaveChild,
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(-100%)' }),
          animate('400ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate('400ms ease-in-out', style({ transform: 'translateX(100%)' }))
        ],
        { optional: true }
      )
    ]),
    pageEnterChild
  ])
];

const pageSlideTopTransition = [
  pageInitialState,
  pageEnterInitialState,
  sequence([
    pageLeaveChild,
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(-100%)' }),
          animate('400ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate('400ms ease-in-out', style({ transform: 'translateY(100%)' }))
        ],
        { optional: true }
      )
    ]),
    pageEnterChild
  ])
];

const pageSlideBottomTransition = [
  pageInitialState,
  pageEnterInitialState,
  sequence([
    pageLeaveChild,
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('400ms ease-in-out', style({ transform: 'translateY(0%)' }))
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateY(0%)' }),
          animate(
            '400ms ease-in-out',
            style({ transform: 'translateY(-100%)' })
          )
        ],
        { optional: true }
      )
    ]),
    pageEnterChild
  ])
];

export let routerTransitionTrigger = trigger('routerTransition', [
  transition('* => slide-right', pageSlideRightTransition),
  transition('* => slide-left', pageSlideLeftTransition),
  transition('* => slide-top', pageSlideTopTransition),
  transition('* => slide-bottom', pageSlideBottomTransition)
]);
