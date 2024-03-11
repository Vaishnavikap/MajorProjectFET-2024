import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.http.get<any[]>('http://localhost:3000/user')
      .subscribe(users => {
        this.users = users;
      });
  }

  deleteUser(id: number): void {
    this.http.delete(`http://localhost:3000/deleteUser/${id}`)
      .subscribe(
        (response) => {
          console.log('User deleted successfully:', response);
          this.fetchUsers();
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
  }

  openDetailsDialog(userId: Number): void {
 
    const dialogRef = this.dialog.open(
      
      UserDetailComponent,
       {
      width: '700px',
      height:'350px',
      data: { userId }

    });
  

    dialogRef.afterClosed().subscribe(result => {
      console.log('The details dialog was closed');
    });
  }
}
