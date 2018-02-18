import {Component} from '@angular/core';
import {
    fadeBottomIf, fadeIf, fadeLeftIf, fadeLeftRightIf, fadeRightIf, fadeRightLeftIf,
    fadeTopIf
} from '../animations/fade/fade';
import {rotate, rotateDownScaleIf, rotateIf} from '../animations/rotate/rotate';
import {fadeRotateIf, rotateDownScaleFadeIf} from '../animations/variety/variety';
import {scale, scaleIf} from '../animations/scale/scale';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        fadeIf({trigger: 'fadder', time: 500 }),
        fadeRightIf({trigger: 'fadeRight', time: 500}),
        fadeLeftIf({trigger: 'fadeLeft', time: 500}),
        fadeTopIf({trigger: 'fadeTop', time: 500}),
        fadeBottomIf({trigger: 'fadeBottom', time: 500}),
        fadeRotateIf({time: 500}),
        fadeLeftRightIf(),
        fadeRightLeftIf(),

        rotateIf({degrees: 360, time: 400}),
        rotateDownScaleIf({time: 600}),
        rotateDownScaleFadeIf({time: 600}),
        rotate({degrees: 360, time: 400}),

        scale(),
        scaleIf(),
    ]
})
export class AppComponent {
    fadeIf = true;
    fadeRightIf = true;
    fadeLeftIf = true;
    fadeTopIf = true;
    fadeBottomIf = true;
    fadeRotateIf = true;
    fadeLeftRightIf = true;
    fadeRightLeftIf = true;

    rotateToggler = true;
    rotateDownScaleIf = true;
    rotateDownScaleFadeIf = true;
    rotate = true;

    scale = true;
    scaleIf = true;

}
