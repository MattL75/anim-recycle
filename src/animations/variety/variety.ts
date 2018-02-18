import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';
import {RotateOptions} from '../rotate/rotate';

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
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({opacity: 1, transform: 'rotate(0deg) scale(1)'}))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1, transform: 'rotate(0deg) scale(1)'}),
                    animate(((options.time) || 400) + 'ms ' + ((options.ease) || 'ease-in'), style({opacity: 0, transform: 'rotate(' + ((options.degrees) || 360) + 'deg) scale(0)'}))
                ]
            )
        ]
    );
}
