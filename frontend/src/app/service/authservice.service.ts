
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  
    getUserId(): number {
    
      const userId = localStorage.getItem('userId');
      return userId ? +userId : null; 
    }


    isLoggedIn(): boolean {
      return !!localStorage.getItem('token');
    }
  
  






  }
  




