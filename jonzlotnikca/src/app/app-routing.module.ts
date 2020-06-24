import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResumePageComponent} from './resume-page/resume-page.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {PhotographyPageComponent} from './photography-page/photography-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  { path: 'resume',       component: ResumePageComponent },
  { path: 'projects',     component: ProjectsPageComponent },
  { path: 'photography',  component: PhotographyPageComponent },
  { path: '',             component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
