import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { PhotographyPageComponent } from './photography-page/photography-page.component';
import { ProjectSummaryComponent } from './projects-page/project-summary/project-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFooterComponent,
    TitleHeaderComponent,
    LandingPageComponent,
    ResumePageComponent,
    ProjectsPageComponent,
    PhotographyPageComponent,
    ProjectSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
