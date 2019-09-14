import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iposts} from '../model/post';
import { Observable } from 'rxjs';
import { resolve } from 'url';


@Injectable({providedIn:'root'})
export class UserServices {
    private userpostEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient){}

    UsersPost():Observable<Iposts[]>{
     return this.http.get<Iposts[]>(this.userpostEndpoint)
    };
      AllusersPost() {
    return new Promise((resolve,reject) => {
        try {
            resolve(this.http.get(this.userpostEndpoint).toPromise());
        }
        catch(ex){
            reject(ex);
        }
    })
      };

}