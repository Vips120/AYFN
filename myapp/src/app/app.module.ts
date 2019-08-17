import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses.component';
import {Courses} from './courses';
import { HeartComponent } from './heart.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SwitchComponent } from './switch.component';
import { UserRecordComponent } from './userrecord.component';
import { CurrentUserComponent } from './currentuser.record';
import { UserDirective } from './user.directives';
import { CustComponent } from './cust.component';
import { Custpipe } from './cust.pipes';
import { TemplateformComponent } from './templateform/templateform.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeartComponent,
    ParentComponent,
    ChildComponent,
    SwitchComponent,
    UserRecordComponent,
    CurrentUserComponent,
    UserDirective,
    CustComponent,
    Custpipe,
    TemplateformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
