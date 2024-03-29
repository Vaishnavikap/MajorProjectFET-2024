import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { UserRegistrationService } from '../../../../service/user-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  private dialogRef!: MatDialogRef<RegistrationComponent>;
  showPassword: boolean = false;

  constructor(
    private service: UserRegistrationService,
    private snackBar: MatSnackBar 
  ) {}

  user = new FormGroup({
    "FirstName": new FormControl("", Validators.required),
    "LastName": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  });

  registerUser() {
    if (this.user.invalid) {
      this.snackBar.open('Please fill all fields correctly.', 'Dismiss', {
        duration: 3000,
        panelClass: ['custom-snackbar'],
        verticalPosition: 'top'
      });
      return;
    }
  
    console.log("In addUser", this.user.value);
    this.service.saveUserDetails(this.user.value).subscribe(response => {
      this.snackBar.open('Registration Successful!', 'Dismiss', {
        duration: 3000,
      });
      this.dialogRef.close();
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
