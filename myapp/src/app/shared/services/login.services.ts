import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IuserLogin} from '../model/login';
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})
export class LoginServices {
    private userloginEndPoint = 'http://mobile.test.acorsociety.com/ideators/api/users/userloginasync';
    public headers;
    constructor(private http: HttpClient){
        this.headers = new HttpHeaders({'Content-Type':'application/json'})
    }
    UserLogin(item:IuserLogin):Observable<IuserLogin>{
        return this.http.post<IuserLogin>(this.userloginEndPoint,JSON.stringify(item), {headers: this.headers})
    };

    
}