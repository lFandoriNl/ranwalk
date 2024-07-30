import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../core/layout/main/main-layout.component';

@Component({
  selector: 'rw-home',
  standalone: true,
  imports: [MainLayoutComponent],
  styles: ``,
  template: `<rw-main-layout>Home</rw-main-layout>`,
})
export class HomeComponent {}
