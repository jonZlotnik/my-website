import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutMePageComponent} from './about-me-page/about-me-page.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {PhotographyPageComponent} from './photography-page/photography-page.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  { path: 'resume',       component: AboutMePageComponent },
  { path: 'projects',     component: ProjectsPageComponent },
  { path: 'photography',  component: PhotographyPageComponent },
  { path: '',             component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
