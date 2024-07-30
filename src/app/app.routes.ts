import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: 'point-of-interest', component: HomeComponent },
  { path: '1', component: HomeComponent },
  { path: '2', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' },
];
