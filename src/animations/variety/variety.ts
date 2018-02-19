import {
    animate, animateChild, AnimationTriggerMetadata, group, keyframes, query, state, style, transition,
    trigger
} from '@angular/animations';
import {RotateOptions} from '../rotate/rotate';
import {Options} from '../common/interfaces';

export function fadeRotateIf(options: RotateOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'fadeRotateIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'rotate(' + ((options.degrees) || 360) + 'deg)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 1,
                        transform: 'rotate(0deg)'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'rotate(0deg)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 0,
                        transform: 'rotate(' + ((options.degrees) || 360) + 'deg)'
                    }))
                ]
            )
        ]
    );
}

export function rotateDownScaleFadeIf(options: RotateOptions = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'rotateDownScaleFadeIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'rotate(' + ((options.degrees) || 360) + 'deg) scale(0)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 1,
                        transform: 'rotate(0deg) scale(1)'
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'rotate(0deg) scale(1)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({
                        opacity: 0,
                        transform: 'rotate(' + ((options.degrees) || 360) + 'deg) scale(0)'
                    }))
                ]
            )
        ]
    );
}

export function heartbeat(options: Options = {}): AnimationTriggerMetadata {
    return trigger((options.trigger) || 'heartbeat', [
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), {optional: true}),
                animate(((options.time) || 500) + 'ms ' +
                    ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                    style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
                    style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
                    style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
                ])),
            ]),
        ]),
    ]);
}

export function squareIf(options: Options = {}): AnimationTriggerMetadata {
    return trigger(
        (options.trigger) || 'squareIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0, transform: 'translateX(0px) translateY(20px) scale3d(0, 0, 0)'}),
                    group([
                        query('@*', animateChild(), {optional: true}),
                        animate(((options.time) || 900) + 'ms ' +
                            ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 0, transform: 'translateX(0%) translateY(-20px) scale3d(0, 0, 0)', offset: 0}),
                            style({opacity: 1, transform: 'translateX(20px) translateY(-20px) scale3d(0.75, 0.75, 0.75)', offset: 0.166}),
                            style({opacity: 1, transform: 'translateX(20px) translateY(20px) scale3d(0.75, 0.75, 0.75)', offset: 0.333}),
                            style({opacity: 1, transform: 'translateX(-40px) translateY(20px) scale3d(0.75, 0.75, 0.75)', offset: 0.499}),
                            style({opacity: 1, transform: 'translateX(-40px) translateY(-20px) scale3d(0.75, 0.75, 0.75)', offset: 0.666}),
                            style({opacity: 1, transform: 'translateX(0) translateY(-20px) scale3d(0.75, 0.75, 0.75)', offset: 0.833}),
                            style({opacity: 1, transform: 'translateX(0) translateY(0px) scale3d(1, 1, 1)', offset: 1}),
                        ])),
                    ]),
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'translateX(0px) translateY(0px) scale3d(1, 1, 1)'}),
                    group([
                        query('@*', animateChild(), {optional: true}),
                        animate(((options.time) || 900) + 'ms ' +
                            ((options.stagger) || 0) + 'ms ' + 'ease-in-out', keyframes([
                            style({opacity: 1, transform: 'translateX(0) translateY(0px) scale3d(1, 1, 1)', offset: 0}),
                            style({opacity: 1, transform: 'translateX(0) translateY(-20px) scale3d(0.75, 0.75, 0.75)', offset: 0.166}),
                            style({opacity: 1, transform: 'translateX(-40px) translateY(-20px) scale3d(0.75, 0.75, 0.75)', offset: 0.333}),
                            style({opacity: 1, transform: 'translateX(-40px) translateY(20px) scale3d(0.75, 0.75, 0.75)', offset: 0.499}),
                            style({opacity: 1, transform: 'translateX(20px) translateY(20px) scale3d(0.75, 0.75, 0.75)', offset: 0.666}),
                            style({opacity: 1, transform: 'translateX(20px) translateY(-20px) scale3d(0.75, 0.75, 0.75)', offset: 0.833}),
                            style({opacity: 0, transform: 'translateX(0%) translateY(-20px) scale3d(0, 0, 0)', offset: 1}),
                        ])),
                    ]),
                ]
            )
        ]
    );
}
