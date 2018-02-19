import {
    animate, animateChild, AnimationTriggerMetadata, group, keyframes, query, style, transition,
    trigger
} from '@angular/animations';
import {Options} from '../common/interfaces';

export function flashIf(options: Options = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'flashIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0}),
                    group([
                        query('@*', animateChild(), {optional: true}),
                        animate(((options.time) || 500) + 'ms ' +
                            ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 1, offset: 0}),
                            style({opacity: 0, offset: 0.25}),
                            style({opacity: 1, offset: 0.5}),
                            style({opacity: 0, offset: 0.75}),
                            style({opacity: 1, offset: 1.0}),
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
                            ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 0, offset: 0}),
                            style({opacity: 1, offset: 0.25}),
                            style({opacity: 0, offset: 0.5}),
                            style({opacity: 1, offset: 0.75}),
                            style({opacity: 0, offset: 1.0}),
                        ])),
                    ]),
                ]
            )
        ]
    );
}

export function flash(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'flash', [
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 500) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({opacity: 1, offset: 0}),
                    style({opacity: 0, offset: 0.25}),
                    style({opacity: 1, offset: 0.5}),
                    style({opacity: 0, offset: 0.75}),
                    style({opacity: 1, offset: 1.0}),
                ])),
            ]),
        ]),
    ]);
}
