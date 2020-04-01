import { Component, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '400px',
        width: '400px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '200px',
        width: '200px',
        opacity: 0.5,
        borderRadius: '50%',
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ],
})

export class AppComponent  {
  name = 'Angular';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
