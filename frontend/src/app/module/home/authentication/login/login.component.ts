import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { UserRegistrationService } from '../../../../service/user-registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private dialogRef!: MatDialogRef<RegistrationComponent>;

  constructor(private service: UserRegistrationService) { }

  user = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  });

  loginUser() {
    console.log("In loginUser", this.user.value);
    this.service.loginUser(this.user.value).subscribe((response: any) => {
      console.log(response);
    });
  }

  closeDialog() {
    this.dialogRef.close(); // Close the dialog
  }

}
