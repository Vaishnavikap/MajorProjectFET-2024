import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: any;
  playlists: any[];
  loading: boolean = true;
  error: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<UserDetailComponent>,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const userId: number = this.data.userId;
    if (userId) {
      this.getUserPlaylists(userId);
    } else {
      this.error = 'User ID not provided.';
      this.loading = false;
    }
  }

  getUserPlaylists(userId: number): void {
    this.http.get<any>('http://localhost:3000/playlist/userId/' + userId)
      .subscribe(
        (playlists) => {
          this.playlists = playlists;
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching playlists:', error);
          this.error = 'Error fetching user playlists.';
          this.loading = false;
        }
      );
  }

  closeDialog() {
    this.dialogRef.close(); // Close the dialog
  }
}
