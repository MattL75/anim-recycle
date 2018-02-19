import {
    animate, AnimationTriggerMetadata, keyframes, state, style, transition,
    trigger
} from '@angular/animations';
import {Options} from '../common/interfaces';

export function flyAwayRight(options: Options = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'flyAwayRight',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(100%) translateY(100%) scale(0)'}),
                    animate(((options.time) || 600) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 0, transform: 'translateX(100%) translateY(-60%) scale(0)', offset: 0}),
                            style({opacity: 0.3, transform: 'translateX(80%) translateY(-30%) scale(0.3)', offset: 0.3}),
                            style({opacity: 0.6, transform: 'translateX(30%) translateY(30%) scale(0.6)', offset: 0.6}),
                            style({opacity: 0.9, transform: 'translateX(-10%) translateY(10%) scale(0.9)', offset: 0.9}),
                            style({opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 1}),
                        ])
                    )
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)'}),
                    animate(((options.time) || 600) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 0}),
                            style({opacity: 0.9, transform: 'translateX(-10%) translateY(10%) scale(0.9)', offset: 0.3}),
                            style({opacity: 0.6, transform: 'translateX(30%) translateY(30%) scale(0.6)', offset: 0.6}),
                            style({opacity: 0.3, transform: 'translateX(80%) translateY(-30%) scale(0.3)', offset: 0.9}),
                            style({opacity: 0, transform: 'translateX(100%) translateY(-60%) scale(0)', offset: 1}),
                        ])
                    )
                ]
            )
        ]
    );
}

export function flyAwayLeft(options: Options = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'flyAwayLeft',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(-100%) translateY(-100%) scale(0)'}),
                    animate(((options.time) || 600) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 0, transform: 'translateX(-100%) translateY(-60%) scale(0)', offset: 0}),
                            style({opacity: 0.3, transform: 'translateX(-80%) translateY(-30%) scale(0.3)', offset: 0.3}),
                            style({opacity: 0.6, transform: 'translateX(-30%) translateY(30%) scale(0.6)', offset: 0.6}),
                            style({opacity: 0.9, transform: 'translateX(10%) translateY(10%) scale(0.9)', offset: 0.9}),
                            style({opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 1}),
                        ])
                    )
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)'}),
                    animate(((options.time) || 600) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 1, transform: 'translateX(0%) translateY(0%) scale(1)', offset: 0}),
                            style({opacity: 0.9, transform: 'translateX(10%) translateY(10%) scale(0.9)', offset: 0.3}),
                            style({opacity: 0.6, transform: 'translateX(-30%) translateY(30%) scale(0.6)', offset: 0.6}),
                            style({opacity: 0.3, transform: 'translateX(-80%) translateY(-30%) scale(0.3)', offset: 0.9}),
                            style({opacity: 0, transform: 'translateX(-100%) translateY(-60%) scale(0)', offset: 1}),
                        ])
                    )
                ]
            )
        ]
    );
}

export function flyInOut(): AnimationTriggerMetadata {
    return trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition(':enter', [
            animate(300, keyframes([
                style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                style({opacity: 1, transform: 'translateX(15px)', offset: 0.5}),
                style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
            ]))
        ]),
        transition(':leave', [
            animate(300, keyframes([
                style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
                style({opacity: 0, transform: 'translateX(100%)', offset: 1.0})
            ]))
        ])
    ]);
}
