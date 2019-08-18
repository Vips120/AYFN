import { Component, OnInit } from '@angular/core';
import {UserRegx} from './regx';
import {Validators,FormGroup, FormBuilder} from '@angular/forms';
import {Iuser} from '../shared/model/reactiveform';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  public userForm: FormGroup;
  public submitted:boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      'username':['', [Validators.required,Validators.minLength(5),UserRegx.Username]],
      'password':['',[Validators.required,UserRegx.Password]],
      'email':['',[Validators.required,UserRegx.Email]]
    })
  };

  Save(data:Iuser){
    this.submitted = true;
    if(!this.userForm.valid){return;}
    console.log(data);
  }

}
