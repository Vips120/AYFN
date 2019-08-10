import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {Courses} from './courses';
import { HeartComponent } from './heart.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SwitchComponent } from './switch.component';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeartComponent,
    ParentComponent,
    ChildComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
