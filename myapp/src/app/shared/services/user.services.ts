import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iposts} from '../model/post';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class UserServices {
    private userpostEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient){}

    UsersPost():Observable<Iposts[]>{
     return this.http.get<Iposts[]>(this.userpostEndpoint)
    }
}