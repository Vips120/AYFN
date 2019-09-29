import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IuserLogin} from '../model/login';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class LoginServices {
    private userloginEndPoint = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public headers;
    public currentUser: BehaviorSubject<IuserLogin>;
    public loggedInUser:Observable<IuserLogin>
    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({'Content-Type':'application/json'});
        this.currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
this.loggedInUser = this.currentUser.asObservable();
    }
    UserLogin(item:IuserLogin):Observable<IuserLogin>{
        return this.http.post<IuserLogin>(this.userloginEndPoint,JSON.stringify(item), {headers: this.headers})
        .pipe(map(item => {
             if(item && item.UserIdentity) {
                 localStorage.setItem('currentUser', JSON.stringify(item));
                 this.currentUser.next(item);
             } else {
                 return item;
             }
        }))
    };

    Userlogout(){
        localStorage.removeItem('currentUser');
        this.currentUser.next(null);
        // location.reload();
    }

    
}