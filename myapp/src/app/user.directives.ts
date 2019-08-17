import {Directive,ElementRef, Renderer, HostListener, HostBinding} from '@angular/core';
@Directive({
    selector:'[ccContent]'
})

export class UserDirective {
  @HostBinding('class.formBuilder') isActive = false;
    constructor(private el: ElementRef,private RE: Renderer){
// el.nativeElement.style.backgroundColor="green";
// el.nativeElement.style.color = "white";
// el.nativeElement.style.fontSize = "25px";
// RE.setElementStyle(el.nativeElement,'backgroundColor', 'green');
// RE.setElementStyle(el.nativeElement, 'color', 'white');
// RE.setElementStyle(el.nativeElement, 'fontSize', '25px');
    };
//     @HostListener('mouseover') onmouseover() {
//         this.RE.setElementStyle(this.el.nativeElement,'backgroundColor', 'green');
//         this.RE.setElementStyle(this.el.nativeElement, 'color', 'white');
// this.RE.setElementStyle(this.el.nativeElement, 'fontSize', '25px');
// // this.isActive = true;
//     }
//     @HostListener('mouseout') onmouseout(){
//         this.RE.setElementStyle(this.el.nativeElement,'backgroundColor', 'white');
//         this.RE.setElementStyle(this.el.nativeElement, 'color', 'black');
// this.RE.setElementStyle(this.el.nativeElement, 'fontSize', '18px');
// // this.isActive =false;
//     }

 @HostListener('mouseover') onmouseover() {
    console.log(this.el.nativeElement); 
    let ko = this.el.nativeElement.querySelector('.formBuilder');
     
     this.RE.setElementStyle(ko, 'display', 'block');
 }
 @HostListener('mouseout') onmouseout() {
    console.log(this.el.nativeElement); 
    let ko = this.el.nativeElement.querySelector('.formBuilder');
     
     this.RE.setElementStyle(ko, 'display', 'none');
 }
}