import {Options} from '../common/interfaces';
import {
    animate,
    animateChild, AnimationTriggerMetadata, group, keyframes, query, state, style, transition,
    trigger
} from '@angular/animations';

export interface ScaleOptions extends Options {
    initScale?: number;
    endScale?: number;
    ease?: string;
}

export function scale(options: ScaleOptions = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'scale', [
        state('0', style({
            transform: 'scale(' + ((options.initScale) || 0.5) + ')',
        })),
        state('1', style({
            transform: 'scale(' + ((options.endScale) || 1) + ')',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 250) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' +
                    ((options.ease) || 'ease-in')),
            ]),
        ]),
    ]);
}

export function scaleIf(options: ScaleOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'scaleIf',
        [
            transition(
                ':enter', [
                    style({transform: 'scale(' + ((options.endScale) || 0) + ')'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({transform: 'scale(' + ((options.initScale) || 1) + ')'}))
                ]
            ),
            transition(
                ':leave', [
                    style({transform: 'scale(' + ((options.initScale) || 1) + ')'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({transform: 'scale(' + ((options.endScale) || 0) + ')'}))
                ]
            )
        ]
    );
}

export function scaleUpDownIf(options: ScaleOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'scaleUpDownIf',
        [
            transition(
                ':enter', [
                    style({transform: 'scale3d(0, 0, 0)'}),
                    group([
                        query('@*', animateChild(), {optional: true}),
                        animate(((options.time) || 500) + 'ms ' +
                            ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                            style({transform: 'scale3d(0, 0, 0)', offset: 0}),
                            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.8}),
                            style({transform: 'scale3d(1, 1, 1)', offset: 1}),
                        ])),
                    ]),
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1}),
                    group([
                        query('@*', animateChild(), {optional: true}),
                        animate(((options.time) || 500) + 'ms ' +
                            ((options.stagger) || 0) + 'ms ' + 'ease-in', keyframes([
                            style({transform: 'scale3d(1, 1, 1)', offset: 0}),
                            style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
                            style({transform: 'scale3d(0, 0, 0)', offset: 1}),
                        ])),
                    ]),
                ]
            )
        ]
    );
}

