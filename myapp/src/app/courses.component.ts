import {Component} from '@angular/core';
@Component({
    selector:'app-courses',
    template:`
    <h2>
    {{username}}
    </h2>
    
    `,
    styles: [``]
})

export class CoursesComponent {
    public username:string = 'Peter Thiel';
 constructor(){}
}