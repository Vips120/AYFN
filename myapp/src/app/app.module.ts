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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { ProductComponent } from './product/product.component';
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
    TemplateformComponent,
    ReactiveformComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Courses],
  bootstrap: [AppComponent]
})
export class AppModule { }
