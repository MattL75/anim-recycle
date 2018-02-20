import {
    animate, animateChild, AnimationTriggerMetadata, group, keyframes, query, state, style, transition,
    trigger
} from '@angular/animations';
import {Options} from '../common/interfaces';

export function skew(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'skew', [
        state('0', style({
            transform: 'none',
        })),
        state('1',  style({
            transform: 'none',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 800) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({transform: 'none', offset: 0}),
                    style({transform: 'none', offset: 0.011}),
                    style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222}),
                    style({transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333}),
                    style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444}),
                    style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555}),
                    style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666}),
                    style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777}),
                    style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888}),
                ])),
            ]),
        ]),
    ]);
}

export function lightSkew(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'lightSkew', [
        state('0', style({
            transform: 'none',
        })),
        state('1',  style({
            transform: 'none',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 500) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({transform: 'none', offset: 0}),
                    style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.5}),
                    style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 1}),
                ])),
            ]),
        ]),
    ]);
}

export function weirdSkew(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'weirdSkew', [
        state('0', style({
            transform: 'none',
        })),
        state('1',  style({
            transform: 'none',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 700) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({transform: 'none', offset: 0}),
                    style({transform: 'scale3d(0.8, 0.8, 0.8) skewX(-3deg) skewY(-5deg)', offset: 0.3333}),
                    style({transform: 'scale3d(0.8, 0.8, 0.8) skewX(3deg) skewY(5deg)', offset: 0.6666}),
                    style({transform: 'none', offset: 1}),
                ])),
            ]),
        ]),
    ]);
}
