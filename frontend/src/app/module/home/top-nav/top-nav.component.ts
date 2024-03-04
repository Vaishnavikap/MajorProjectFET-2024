import { Component } from '@angular/core';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../authentication/login/login.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  constructor(private dialog: MatDialog) {}

  openSignUpModal(): void {
    this.dialog.open(RegistrationComponent , {
      width: '50%',
      height:'50%' // Adjust width as needed
    });
  }
  openLoginInModal(): void {
    this.dialog.open(LoginComponent, {
      width: '50%',
      height:'50%' // Adjust width as needed
    }
    );
  }
}
