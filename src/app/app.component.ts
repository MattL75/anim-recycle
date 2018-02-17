import {Component} from '@angular/core';
import {fadeIf} from '../animations/fade/fade';
import {trigger, animate, style, transition} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [fadeIf({trigger: 'fadder', time: 500 })]
})
export class AppComponent {
    toggler = true;
}
