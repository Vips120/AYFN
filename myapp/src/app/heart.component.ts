import {Component, Input} from '@angular/core';
@Component({
    selector: 'app-heart',
    template:`    
<i class="fa fa-3x" aria-hidden="true"
[class.fa-heart-o]="!likeHeart"
[class.fa-heart]="likeHeart"
(click)="ActiveHeart()"
></i> {{counter}}
<hr/>
<h3>{{Heading}}</h3>
<button type="button" class="btn btn-danger btn-md"
(click)="user=maleInfo"
[disabled]="user==maleInfo"
>Male</button>
<button type="button" class="btn btn-info btn-md"
(click)="user=femaleInfo"
[disabled]="user==femaleInfo"
>Female</button>
<div class="container" *ngIf="user">
<img src="{{user.imgUrl}}"/>
<h3>{{user.name}}</h3>
</div>

    `,
    styles:[`
     i.fa {
         cursor:pointer;
     }
    `]
})

export class HeartComponent {
    public Heading:string = "UserInfo Details";
    public likeHeart:boolean = false;
    public user:any;
  @Input()  public counter:number;
    public maleInfo = {
        imgUrl:'../assets/img/face2.jpg',
        name: 'John Doe'
    };

    public femaleInfo = {
        imgUrl:'../assets/img/face1.jpg',
        name: 'Emma Doe'
    };
    constructor(){}
    public ActiveHeart(){
this.likeHeart = !this.likeHeart;
this.counter += this.likeHeart ? 1 : -1;
    };
}