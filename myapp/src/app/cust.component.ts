import {Component} from '@angular/core';
@Component({
    selector:'app-cust',
    template:`
    <ul *ngIf="user">
    <li>{{user.username | uppercase | lowercase}}</li>
    <li>{{user.rank | number}}</li>
    <li>{{user.salary | currency:'EUR'}}</li>
    <li>{{user.fltno | number:'2.2-2'}}</li>
    <li>{{user.date | date:'MM/dd/yyyy'}}</li>
    <li>{{user | json}}</li>
    </ul>
    <p>{{heading | content:'21'}}</p>
    <img src="{{imgUrl | content:'http://lorempixel.com/400/200/'}}"/>
    `
})

export class CustComponent {
    public imgUrl:string = '';
    public heading:string = 'Indias biggest online store for Mobiles, Fashion (Clothes/Shoes), Electronics, Home Appliances, Books, Jewelry, Home, Furniture, Sporting goods, Beauty';
    public user = {
        username:'vipul',
        rank:4565455665,
        salary:452568,
        fltno: 9.85654,
        date:new Date()
    };
    constructor(){}
}