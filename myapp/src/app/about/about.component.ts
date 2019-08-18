import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   public products = [{
     id:1,
     name:'product1'
   },
   {
    id:2,
    name:'product2'
  },
  {
    id:3,
    name:'product3'
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
