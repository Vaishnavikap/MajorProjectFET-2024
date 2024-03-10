// auth.guard.ts
import { Injectable } from '@angular/core';
// tslint:disable-next-line: deprecation
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthserviceService , private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      alert('Please login first');
      this.router.navigate(['/']); 
      return false;
    }
  }
}
