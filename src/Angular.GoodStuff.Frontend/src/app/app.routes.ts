import { Routes } from '@angular/router';
import { HomeFeature } from './features/home/home';
import { ROOT_PATHS } from './core/constants/paths';

export const routes: Routes = [
  {
    path: ROOT_PATHS.home,
    component: HomeFeature,
  },
];
