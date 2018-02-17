import {Options} from '../common/interfaces';
import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';

export interface FadeOptions extends Options {
    ease?: string;
}

export function fadeIf(options: FadeOptions = {}): AnimationTriggerMetadata {
    return trigger(
        options.trigger || 'fadeIf',
        [
            transition(
                ':enter', [
                    style({opacity: 0}),
                    animate((options.time || 400) + 'ms ' + (options.ease || 'ease-in'), style({'opacity': 1}))
                ]
            ),
            transition(
                ':leave', [
                    style({opacity: 1}),
                    animate((options.time || 400) + 'ms ' + (options.ease || 'ease-in'), style({'opacity': 0}))
                ]
            )
        ]
    );
}

// Add fade hidden, fade + rotate...
