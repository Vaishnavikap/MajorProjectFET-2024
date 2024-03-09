import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { UserRegistrationService } from '../../../../service/user-registration.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 isAdmin= false;
  private dialogRef!: MatDialogRef<RegistrationComponent>;

  constructor(private service: UserRegistrationService, private router: Router) { }

  user = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  });

  loginUser() {
    console.log("In loginUser", this.user.value);
    this.service.loginUser(this.user.value).subscribe((response: any) => {
      console.log(response);
   
      if (response && response.roles) {
        console.log("Role:", response.roles);
        
      }
   
      sessionStorage.setItem('token', response.token);
    sessionStorage.setItem('userId',response.data.userId)
  
      if (response.roles.includes('Admin')) {
      
        console.log("admin login");
        this.router.navigate(['/admin']); 
      } else {
        console.log("user login");
        this.router.navigate(['/home']); 
      }
     

    });
  }

  closeDialog() {
    this.dialogRef.close(); 
  }

}
