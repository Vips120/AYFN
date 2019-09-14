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

  async ngOnInit() {
    
    // this.userServices
    // .UsersPost()
    // .subscribe(item => {
    //   console.log(item);
    //   this.userposts = item;
    // });

   // using then and catch 
    // this.userServices.AllusersPost()
    // .then(data => {
    //   console.log(data);
    // }).catch(error => {
    //   console.log(error.message);
    // })

    //using async and await
    try {
      let data = await this.userServices.AllusersPost();
      alert(JSON.stringify(data));
      console.log('hellooooo', data)
    }
    catch(ex) {
 console.log(ex.message);
    }

  }

}
