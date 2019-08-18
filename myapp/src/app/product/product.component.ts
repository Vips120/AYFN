import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productId:any;
  constructor(private AR: ActivatedRoute) { }

  ngOnInit() {
    this.AR.params.subscribe(item => {
    this.productId =item['id'];
    console.log(this.productId);
    
    })
  }

}
