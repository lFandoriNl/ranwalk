import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'rw-main-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  styles: `
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  `,
  template: `
    <div class="h-full"><ng-content></ng-content></div>

    <nav>
      <ul class="m-3 flex justify-around rounded-xl bg-indigo-800 text-white">
        @for (item of items; track item.title) {
          <li class="flex">
            <a
              class="px-5 py-3 transition-all active:bg-indigo-700"
              [routerLink]="item.to"
              routerLinkActive="bg-indigo-700"
              [routerLinkActiveOptions]="{ exact: true }"
              ariaCurrentWhenActive="page">
              {{ item.title }}</a
            >
          </li>
        }
      </ul>
    </nav>
  `,
})
export class MainLayoutComponent {
  items = [
    {
      to: '/point-of-interest',
      title: 'Point of interest',
    },
    {
      to: '/1',
      title: 'Item 1',
    },
    {
      to: '/2',
      title: 'Item 2',
    },
  ];
}
