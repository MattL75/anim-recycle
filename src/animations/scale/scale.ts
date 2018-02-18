import {Options} from '../common/interfaces';
import {
    animate,
    animateChild, AnimationTriggerMetadata, group, query, state, style, transition,
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
