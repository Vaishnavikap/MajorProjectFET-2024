
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  
    getUserId(): number {
    
      const userId = sessionStorage.getItem('userId');
      return userId ? +userId : null; 
    }


    isLoggedIn(): boolean {
      return !!sessionStorage.getItem('token');
    }
  
  






  }
  




