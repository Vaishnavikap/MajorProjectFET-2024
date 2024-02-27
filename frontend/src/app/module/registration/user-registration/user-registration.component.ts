import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { UserRegistrationService } from '../../../service/user-registration.service';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  constructor(private service:UserRegistrationService){}

  user=new FormGroup({
  
    "username": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
    "password": new FormControl("", [Validators.required, Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
  
  });
  registerUser(){
    console.log("In addUser",this.user.value);
    this.service.saveUserDetails(this.user.value).subscribe(response=>{
      console.log(response);
    })
    
  }
  
}
