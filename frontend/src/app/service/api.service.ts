import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 url:string="http://localhost:3000/submit-form";
  constructor(private http:HttpClient) { }
  createform(post:Post):Observable<Post>{
    return this.http.post<Post>(this.url,post)
  }

}
