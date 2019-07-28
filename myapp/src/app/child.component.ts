import {Component,Input,EventEmitter,Output} from '@angular/core';
@Component({
    selector:'app-child',
    template:`
    <div class="container">
   <h2>{{username}}</h2>
    </div>
    
    <button type="button" class="btn btn-success btn-md"
    (click)="AddEmail()"
    >Click Here</button>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter your name"
     #username
    >
    </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter your password"
    #password
    >
    </div>
    <button type="button" class="btn btn-danger btn-md"
    (click)="FormData(username.value,password.value)"
    >click</button>
    
    `
})

export class ChildComponent {
    public email:string = 'vs@gmail.com';
   @Input() public username:string;
  @Output() public mailer = new EventEmitter();
    constructor(){}
    public AddEmail(){
   this.mailer.emit(this.email);
    };
    public FormData(uname:any,upass:any){
 console.log(`username: ${uname} and password :${upass}`);
    }

}