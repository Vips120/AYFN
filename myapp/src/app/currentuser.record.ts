import {Component,Input,Output,EventEmitter} from '@angular/core';
import {Iusers} from './shared/model/users';
@Component({
    selector:'app-currentuser',
    template:`
    <div class="container" >
    <div class="row">
    <div class="col-md-8">
    <table class="table table-bordered" >
    <thead>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td scope="row">{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
      </tr>
    </tbody>
  </table>    
    </div>
    </div>
    <div ccContent>
    <h2>hello user</h2>
    <div class="row" >
    <div class="col-md-8 formBuilder">
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter id"
    #id
>
    </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter name"
    #name
>
    </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter email"
    #email
>
    </div>
    <button type="submit"
    class="btn btn-danger btn-md"
   (click)="newUser(id.value,name.value,email.value)">Add</button>

    </div>

    </div>

    </div>
    </div>

    
    `,
    styles:[`
    `]
})

export class CurrentUserComponent {
    @Input() public users:Iusers[];
    @Output() currentUser = new EventEmitter<Iusers>();
    constructor(){}
    newUser(uId,uname,uemail){
this.currentUser.emit({id:uId,name:uname,email:uemail});
    }
}