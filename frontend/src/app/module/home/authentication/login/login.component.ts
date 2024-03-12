import { Component, Inject, HostListener } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { UserRegistrationService } from '../../../../service/user-registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isAdmin = false;

  private dialogRef: MatDialogRef<LoginComponent>;
  @Inject(MAT_DIALOG_DATA) public data: any;

  constructor(
    private service: UserRegistrationService,
    private router: Router,
    private snackBar: MatSnackBar 
  ) {
    // Listen for storage events to synchronize session storage across tabs
    window.addEventListener('storage', (event) => {
      if (event.key === 'logoutEvent') {
        this.logoutUser();
      }
    });
  }

  user = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  });

  loginUser() {
    this.service.loginUser(this.user.value).subscribe((response: any) => {
      if (response && response.roles) {
        console.log("Role:", response.roles);
      }

      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.data.userId);

      if (response.roles.includes('Admin')) {
        console.log("admin login");
        this.router.navigate(['/admin']);
      } else {
        console.log("user login");
        this.router.navigate(['/home']);
      }

      this.snackBar.open('Login Successfully!', 'Dismiss', {
        duration: 3000,
        verticalPosition: 'top'
      });
      this.dialogRef.close();
    });
  }

  // Function to handle logout
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
    this.snackBar.open('Logged out!', 'Dismiss', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event) {
    sessionStorage.setItem('logoutEvent', Date.now().toString());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
