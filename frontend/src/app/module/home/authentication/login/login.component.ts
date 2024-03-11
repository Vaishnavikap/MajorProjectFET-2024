import { Component, Inject } from '@angular/core';
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
  ) {}

  user = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  });

  loginUser() {
    this.service.loginUser(this.user.value).subscribe((response: any) => {
      if (response && response.roles) {
        console.log("Role:", response.roles);
      }

      sessionStorage.setItem('token', response.token);
      sessionStorage.setItem('userId', response.data.userId);

      if (response.roles.includes('Admin')) {
        console.log("admin login");
        this.router.navigate(['/admin']);
      } else {
        console.log("user login");
        this.router.navigate(['/home']);
      }

      this.snackBar.open('Login Successfully!', 'Dismiss', {
        duration: 3000,
      });

      this.dialogRef.close();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
