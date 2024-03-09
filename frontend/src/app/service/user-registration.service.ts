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
    return this.http.post<any>('http://localhost:3000/login', userData);
  }
  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/user/${userId}`);
  }
}
