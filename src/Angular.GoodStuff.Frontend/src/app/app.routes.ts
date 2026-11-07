import { Routes } from '@angular/router';
import { ROOT_PATHS } from './core/constants/paths';
import { HomeFeature } from './features/home/home';
import { InterpolationFeature } from './features/interpolation/interpolation';
import { DirectivesFeature } from '~features/directives/directives';

export const routes: Routes = [
  {
    path: ROOT_PATHS.home,
    component: HomeFeature,
  },
  {
    path: ROOT_PATHS.interpolation,
    component: InterpolationFeature,
  },
  {
    path: ROOT_PATHS.directives,
    component: DirectivesFeature,
  },
];
