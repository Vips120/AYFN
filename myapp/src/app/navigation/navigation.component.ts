import { Component, OnInit } from '@angular/core';
import { LoginServices } from '../shared/services/login.services';
import { IuserLogin } from '../shared/model/login';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public user:IuserLogin;
// public user = JSON.parse(localStorage.getItem('currentUser'));
  constructor(private loginservices: LoginServices) { }

  ngOnInit() {
    // console.log(this.user);
    this.loginservices.loggedInUser.subscribe(x => {
      console.log(x);
      this.user = x;
    })
  };

  userLogout(){
this.loginservices.Userlogout();
  }

}
