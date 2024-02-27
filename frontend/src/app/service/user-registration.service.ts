import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
  saveUserDetails(user:any)
  {

   return this.http.post("http://localhost:3000/addUser",user);
  }
}
