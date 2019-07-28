import {Component} from '@angular/core';
@Component({
    selector:'app-parent',
    template:`
    <div class="container">
    <h2>PARENT SECTION</h2>
    <h3>{{userEmail}}</h3>
    
    <h2>CHILD SECTION</h2>
    <app-child
    [username]="name"
    (mailer)="AddUserEmail($event)"
    ></app-child>
    </div>
    
    `
})

export class ParentComponent {
    public name:string = "John Smith";
    public userEmail:string;
    constructor(){}
    public AddUserEmail(item:any){
        this.userEmail = item;
    };
}