import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatTooltipModule } from '@angular/material/tooltip';

import { TeximateModule } from 'ngx-teximate';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/about/contact/contact.component';
import { ElevationDirective } from './directives/elevation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ProjectsComponent,
    ProjectComponent,
    AboutComponent,
    ContactComponent,
    ElevationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    ClipboardModule,
    MatTooltipModule,
    TeximateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
