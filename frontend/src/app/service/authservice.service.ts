
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  
    constructor() { }
  
    getUserId(): number {
    
      const userId = sessionStorage.getItem('userId');
      return userId ? +userId : null; 
    }
  }
  




