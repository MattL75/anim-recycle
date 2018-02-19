import {Component} from '@angular/core';
import {
    fadeBottomIf, fadeIf, fadeLeftIf, fadeLeftRightIf, fadeRightIf, fadeRightLeftIf,
    fadeTopIf
} from '../animations/fade/fade';
import {rotate, rotateDownScaleIf, rotateIf} from '../animations/rotate/rotate';
import {fadeRotateIf, heartbeat, rotateDownScaleFadeIf, squareIf} from '../animations/variety/variety';
import {scale, scaleIf, scaleUpDownIf} from '../animations/scale/scale';
import {collapseX, collapseXPadding, collapseY, collapseYPadding, height, width} from '../animations/size/size';
import {shakeX, shakeY} from '../animations/variety/shake';
import {flash, flashIf} from '../animations/variety/flash';
import {flyAwayLeft, flyAwayRight, flyInOut} from '../animations/variety/flying';

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
        scaleUpDownIf(),

        width({start: '40%', end: '100%'}),
        height({start: '10%'}),
        collapseX(),
        collapseY(),
        collapseXPadding(),
        collapseYPadding(),

        flyInOut(),
        flyAwayRight(),
        flyAwayLeft(),
        shakeY(),
        shakeX(),
        flash(),
        flashIf(),
        heartbeat(),
        squareIf(),
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
    scaleUpDownIf = true;

    width = true;
    height = true;
    collapseX = true;
    collapseY = true;
    collapseXPadding = true;
    collapseYPadding = true;

    flyInOut = true;
    flyAwayRight = true;
    flyAwayLeft = true;
    shakeY = true;
    shakeX = true;
    flash = true;
    flashIf = true;
    heartbeat = true;
    squareIf = true;

}
