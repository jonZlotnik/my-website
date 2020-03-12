import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { SubTitleComponent } from './sub-title/sub-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    ProfilePictureComponent,
    NavComponent,
    TitleComponent,
    SubTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
