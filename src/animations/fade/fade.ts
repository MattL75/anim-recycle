import {Options} from '../common/interfaces';
import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';

export interface FadeOptions extends Options {
    ease?: string;
}

export function fadeIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({opacity: 1}))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({opacity: 0}))
                ]
            )
        ]
    );
}

export function fadeRightIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeRightIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(100%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 0,
                        transform: 'translateX(100%)'
                    }))
                ]
            )
        ]
    );
}

export function fadeLeftIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeLeftIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(-100%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 0,
                        transform: 'translateX(-100%)'
                    }))
                ]
            )
        ]
    );
}

export function fadeTopIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeTopIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateY(-100%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 1,
                        transform: 'translateY(0%)'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateY(0%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 0,
                        transform: 'translateY(-100%)'
                    }))
                ]
            )
        ]
    );
}

export function fadeBottomIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeBottomIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateY(100%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 1,
                        transform: 'translateY(0%)'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateY(0%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 0,
                        transform: 'translateY(100%)'
                    }))
                ]
            )
        ]
    );
}

export function fadeLeftRightIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeLeftRightIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(-100%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in-out'), style({
                        opacity: 1,
                        transform: 'translateX(0%)',
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in-out'), style({
                        opacity: 0,
                        transform: 'translateX(100%)',
                    }))
                ]
            )
        ]
    );
}

export function fadeRightLeftIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeRightLeftIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(100%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in-out'), style({
                        opacity: 1,
                        transform: 'translateX(0%)',
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0%)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in-out'), style({
                        opacity: 0,
                        transform: 'translateX(-100%)',
                    }))
                ]
            )
        ]
    );
}
