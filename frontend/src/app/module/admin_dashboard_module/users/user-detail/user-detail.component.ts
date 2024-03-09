import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../../../../service/user-registration.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserDetailComponent>,
    private userService: UserRegistrationService
  ) {}

  ngOnInit(): void {
    this.getUserDetails(this.data.userId);
  }

  getUserDetails(userId: string): void {
    this.userService.getUserById(userId)
      .subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user:', error);
          // Handle error
        }
      );
  }

  closeDialog() {
    this.dialogRef.close(); // Close the dialog
  }
}
