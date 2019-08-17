import { Component, OnInit } from '@angular/core';
import {User} from '../shared/model/template';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
public model = new User();
  constructor() {}

  ngOnInit() {}
  Save(data){
    console.log(data);
  }

}
