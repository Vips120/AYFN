import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms';
import {IuserLogin} from '../../shared/model/login';
import { LoginServices } from 'src/app/shared/services/login.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 public userLogin:FormGroup;
 public error;
 public submitted:boolean = false;
  constructor(private fb: FormBuilder, private loginServices:LoginServices, private router: Router) { }

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
this.loginServices.UserLogin(data)
.subscribe(item => {
  console.log(item);
  if(item == null){
    return;
  }
  if(item.UserIdentity){
    alert('Login Successful');
    console.log(item);
    this.router.navigateByUrl('/home');
  } else{
    this.error = item.Error;
  }
})
  }

}
