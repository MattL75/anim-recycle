import {
    trigger,
    state,
    style,
    transition,
    animate,
    AnimationTriggerMetadata,
    query,
    animateChild,
    group
} from '@angular/animations';
import {Options} from '../common/interfaces';

export interface RotateOptions extends Options {
    degrees?: number;
    ease?: string;
}

export function rotate(options: RotateOptions = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'rotate', [
        state('0', style({
            transform: 'rotate(0deg)',
        })),
        state('1', style({
            transform: 'rotate(' + ((options.degrees) || 180) + 'deg)',
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

export function rotateIf(options: RotateOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'rotateIf',
        [
            transition(
                ':enter', [
                    style({transform: 'rotate(' + ((options.degrees) || 180) + 'deg)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({transform: 'rotate(0deg)'}))
                ]
            ),
            transition(
                ':leave', [
                    style({transform: 'rotate(0deg)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({transform: 'rotate(' + ((options.degrees) || 180) + 'deg)'}))
                ]
            )
        ]
    );
}

export function rotateDownScaleIf(options: RotateOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'rotateDownScaleIf',
        [
            transition(
                ':enter', [
                    style({transform: 'rotate(' + ((options.degrees) || 360) + 'deg) scale(0)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({transform: 'rotate(0deg) scale(1)'}))
                ]
            ),
            transition(
                ':leave', [
                    style({transform: 'rotate(0deg) scale(1)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({transform: 'rotate(' + ((options.degrees) || 360) + 'deg) scale(0)'}))
                ]
            )
        ]
    );
}
