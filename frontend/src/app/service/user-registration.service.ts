import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
 
  constructor(private http:HttpClient) { }
  saveUserDetails(user:any)
  {

   return this.http.post("http://localhost:3000/register",user);
  }
  loginUser(userData: any): Observable<any> {
    // Assuming you have an API endpoint for logging in
    return this.http.post<any>('http://localhost:3000/login', userData);
  }
}
