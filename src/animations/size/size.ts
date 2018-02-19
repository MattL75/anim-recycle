import {Options} from '../common/interfaces';
import {
    animate,
    animateChild, AnimationTriggerMetadata, group, query, state, style, transition,
    trigger
} from '@angular/animations';

export interface SizeOptions extends Options {
    start?: string;
    end?: string;
    ease?: string;
}

export function width(options: SizeOptions = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'width', [
        state('0', style({
            width: ((options.start) || 0),
        })),
        state('1', style({
            width: ((options.end) || '*'),
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 400) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' +
                    ((options.ease) || 'ease-in')),
            ]),
        ]),
    ]);
}

export function height(options: SizeOptions = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'height', [
        state('0', style({
            height: ((options.start) || 0),
        })),
        state('1', style({
            height: ((options.end) || '*'),
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 400) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' +
                    ((options.ease) || 'ease-in')),
            ]),
        ]),
    ]);
}

export function collapseX(options: SizeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'collapseX',
        [
            transition(
                ':enter', [
                    style({width: 0,  overflow: 'hidden'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({width: '*'}))
                ]
            ),
            transition(
                ':leave', [
                    style({width: '*', overflow: 'hidden'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({width: 0}))
                ]
            )
        ]
    );
}

export function collapseY(options: SizeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'collapseY',
        [
            transition(
                ':enter', [
                    style({height: 0,  overflow: 'hidden'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({height: '*'}))
                ]
            ),
            transition(
                ':leave', [
                    style({height: '*', overflow: 'hidden'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({height: 0}))
                ]
            )
        ]
    );
}

export function collapseXPadding(options: SizeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'collapseXPadding',
        [
            transition(
                ':enter', [
                    style({width: 0, overflow: 'hidden', 'padding-left': 0, 'padding-right': 0}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({width: '*', 'padding-left': '*', 'padding-right': '*'}))
                ]
            ),
            transition(
                ':leave', [
                    style({width: '*', overflow: 'hidden', 'padding-left': '*', 'padding-right': '*'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({width: 0, 'padding-left': 0, 'padding-right': 0}))
                ]
            )
        ]
    );
}

export function collapseYPadding(options: SizeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'collapseYPadding',
        [
            transition(
                ':enter', [
                    style({height: 0, overflow: 'hidden', 'padding-top': 0, 'padding-bottom': 0}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({height: '*', 'padding-top': '*', 'padding-bottom': '*'}))
                ]
            ),
            transition(
                ':leave', [
                    style({height: '*', overflow: 'hidden', 'padding-top': '*', 'padding-bottom': '*'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({height: 0, 'padding-top': 0, 'padding-bottom': 0}))
                ]
            )
        ]
    );
}
