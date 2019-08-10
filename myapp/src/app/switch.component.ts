import {Component} from '@angular/core';
@Component({
    selector:'app-switch',
    template:`
    
<div class="container">
<div class="row">
  <div class="col-md-8">
    <button type="button" class="btn btn-primary" style="margin-right:5px"
    (click)="contentMenu='home'"
    >Home</button>
    <button type="button" class="btn btn-info"
    (click)="contentMenu='about'"
    >About</button>
  </div>
</div>
<div class="row">
<div class="col-md-8">
<div *ngIf="contentMenu" [ngSwitch]="contentMenu">
<h2 *ngSwitchCase="'home'">This is home section</h2>
<h2 *ngSwitchCase="'about'">This is about sectiong</h2>
<h2 *ngSwitchDefault>Not Found</h2>
</div>

</div>
</div>
</div>
    
    
    `
})

export class SwitchComponent {
    public contentMenu:string;
    constructor(){}
}