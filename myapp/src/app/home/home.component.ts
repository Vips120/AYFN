import { Component, OnInit } from '@angular/core';
import { UserServices } from '../shared/services/user.services';
import {Iposts} from '../shared/model/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   userposts:Iposts[];
  constructor(private userServices:UserServices) { }

   ngOnInit() {
    this.userServices
    .UsersPost()
    .subscribe(item => {
      console.log(item);
      this.userposts = item;
    });
  }

}
