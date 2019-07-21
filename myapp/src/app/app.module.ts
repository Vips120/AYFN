import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {Courses} from './courses';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
