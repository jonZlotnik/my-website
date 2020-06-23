import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResumePageComponent} from './resume-page/resume-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import { RoutePaths } from './app-routing.constants';

export const routes: Routes = [
  {path: RoutePaths.CVRoute, component: ResumePageComponent},
  {path: RoutePaths.LandingRoute, component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
