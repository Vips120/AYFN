import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {IuserLogin} from '../../shared/model/login';
import { LoginServices } from 'src/app/shared/services/login.services';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 public userLogin:FormGroup;
 public submitted:boolean = false;
  constructor(private fb: FormBuilder, private loginServices:LoginServices) { }

  ngOnInit() {
    this.userLogin = this.fb.group({
        UserLogin:this.fb.group({
          UserName:['', Validators.required],
          Password:['', Validators.required]
        })
    })
  };
  Save(data: IuserLogin){
 this.submitted = true;
 if(!this.userLogin.valid){return;}
 console.log(data);
this.loginServices.UserLogin(data)
.subscribe(item => {
  alert('Login Successful');
  console.log(item);
})
  }

}
