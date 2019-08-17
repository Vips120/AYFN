import {Component} from '@angular/core';
import {Iusers} from './shared/model/users';
@Component({
    selector: 'app-user',
    template: `
    <div class="container">
     <div class="row">
     <div class="col-md-8">
<app-currentuser [users]="usersData" (currentUser)="AddnewUser($event)"></app-currentuser>
     </div>
     </div>
    </div>
    
    
    `
})

export class UserRecordComponent {
public usersData:Iusers[]= [{
    id:1,
    name: 'john',
    email:'john@gmail.com'
},
{
    id:2,
    name: 'Raj',
    email:'raj@gmail.com'
},
{
    id:3,
    name:'rahul',
    email:'rahul@yahoo.com'
}
];
    constructor(){}
    AddnewUser(data:Iusers) {
        this.usersData.unshift(data);
    }
}