import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'rw-root',
  standalone: true,
  imports: [RouterOutlet],
  styles: `
    :host {
      height: 100%;
      display: block;
    }
  `,
  template: `<router-outlet />`,
})
export class AppComponent {}
