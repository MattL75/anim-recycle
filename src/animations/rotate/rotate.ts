import { trigger, state, style, transition, animate, AnimationTriggerMetadata, query, animateChild, group } from '@angular/animations';
import { Options } from '../common/interfaces';

export interface RotateOptions extends Options {
    degrees?: number;
    ease?: string;
}

export function rotate(options: RotateOptions = {}): AnimationTriggerMetadata {
    return trigger(options.trigger || 'tdRotate', [
        state('0', style({
            transform: 'rotate(0deg)',
        })),
        state('1',  style({
            transform: 'rotate(' + (options.degrees || 180) + 'deg)',
        })),
        transition('0 <=> 1', [
            group([
                query('@*', animateChild(), { optional: true }),
                animate((options.time || 250) + 'ms ' +
                    (options.stagger || 0) + 'ms ' +
                    (options.ease || 'ease-in')),
            ]),
        ]),
    ]);
}

// Add rotate hidden + rotate if
