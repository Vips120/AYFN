import { Component, OnInit,ElementRef } from '@angular/core';
import {fromEvent} from 'rxjs';
import * as opt from 'rxjs/operators';
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
  constructor(private el:ElementRef) { }

  ngOnInit() {
    let search = this.el.nativeElement.querySelector("#search");
     let observe = fromEvent(search,'keyup')
                     .pipe(opt.map((e:any) => e.target.value),
                           opt.filter(data => data.length >=4),
                           opt.debounceTime(2000)
                     )
     ;
     observe
     .subscribe(item => console.log(item));
  }

}
