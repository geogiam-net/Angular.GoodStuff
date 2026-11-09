import { Routes } from '@angular/router';
import { ROOT_PATHS } from '~core/constants/paths';
import { HomeFeature } from '~features/home/home';
import { InterpolationFeature } from '~features/interpolation/interpolation';
import { DirectivesFeature } from '~features/directives/directives';
import { EventsFeature } from '~features/events/events';
import { ParamsFeature } from '~features/params/params';
import { ConditionalCssFeature } from '~features/conditional-css/conditional-css';
import { PipesFeatures } from '~features/pipes/pipes';
import { SignalsFeature } from '~features/signals/signals';
import { LifeCycleFeature } from '~features/life-cycle/life-cycle';
import { HttpclientFeature } from '~features/httpclient/httpclient';
import { SharingdataFeature } from '~features/sharingdata/sharingdata';
import { LazyloadingFeature } from '~features/lazyloading/lazyloading';

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
  {
    path: ROOT_PATHS.events,
    component: EventsFeature,
  },
  {
    path: ROOT_PATHS.params,
    component: ParamsFeature,
  },
  {
    path: ROOT_PATHS.conditionalCss,
    component: ConditionalCssFeature,
  },
  {
    path: ROOT_PATHS.pipes,
    component: PipesFeatures,
  },
  {
    path: ROOT_PATHS.signals,
    component: SignalsFeature,
  },
  {
    path: ROOT_PATHS.lifeCycle,
    component: LifeCycleFeature,
  },
  {
    path: ROOT_PATHS.httpclient,
    component: HttpclientFeature,
  },
  {
    path: ROOT_PATHS.sharingdata,
    component: SharingdataFeature,
  },
  {
    path: ROOT_PATHS.lazyloading,
    component: LazyloadingFeature,
  },
];
