import { Routes } from '@angular/router';
import { PointInterestComponent } from './features/point-interest/point-interest.component';

export const routes: Routes = [
  { path: 'point-of-interest', component: PointInterestComponent },
  { path: '1', component: PointInterestComponent },
  { path: '2', component: PointInterestComponent },
  { path: '', component: PointInterestComponent },
  { path: '**', redirectTo: '' },
];
