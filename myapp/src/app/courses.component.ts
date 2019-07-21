import {Component} from '@angular/core';
import {Courses} from './courses';
@Component({
    selector:'app-courses',
    template:`
    <h2>
    {{username}}
    </h2>
    <ul *ngFor="let course of courses">
    <li

    [ngStyle]="{
        color: isActive ? 'red':'green',
        fontSize: isActive ? '45px' : '22px'
    }"
    (click)="Action()"
    >{{course}}</li>
    </ul>
    <div

    [ngClass]="{
        item1: isActive,
        item2:!isActive
    }"
    ></div>
    <img src="{{imgUrl}}" width="100px" height="100px">
    `,
    styles: [`
    .item1 {
        width:200px;
        height:200px;
        background-color:yellow;
    }
    .item2{
        width:150px;
        height:150px;
        background-color:teal;
    }
    
    `]
})

export class CoursesComponent{
    public username:string = 'Peter Thiel';
    public courses:string[];
    public isActive:boolean = false;
    public imgUrl:string="../assets/img/1.jpg";
    // public courses:string[] = ['angular','typescript', 'javascript', 'nodejs', 'mongodb'];
 constructor(private course:Courses){
     this.courses = course.getCourse();
    //  super();
    //  this.courses = this.getCourse();
 };
 Action(){
     this.isActive = !this.isActive;
 }
}