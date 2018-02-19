import {
    animate, animateChild, AnimationTriggerMetadata, group, keyframes, query, style, transition,
    trigger
} from '@angular/animations';
import {Options} from '../common/interfaces';

export function shakeY(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'shakeY', [
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 300) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({transform: 'translateY(0)', offset: 0}),
                    style({transform: 'translateY(-10px)', offset: 0.2}),
                    style({transform: 'translateY(3px)', offset: 0.35}),
                    style({transform: 'translateY(-5px)', offset: 0.7}),
                    style({transform: 'translateY(2px)', offset: 0.85}),
                    style({transform: 'translateY(0)', offset: 1}),
                ])),
            ]),
        ]),
    ]);
}

export function shakeX(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'shakeX', [
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 300) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({transform: 'translateX(0)', offset: 0}),
                    style({transform: 'translateX(-10px)', offset: 0.2}),
                    style({transform: 'translateX(3px)', offset: 0.35}),
                    style({transform: 'translateX(-5px)', offset: 0.7}),
                    style({transform: 'translateX(2px)', offset: 0.85}),
                    style({transform: 'translateX(0)', offset: 1}),
                ])),
            ]),
        ]),
    ]);
}
