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
        this.fetchPaymentsForUsers(); 
      });
  }

  fetchPaymentsForUsers(): void {
    this.users.forEach(user => {
      this.http.get<any[]>(`http://localhost:3000/payment/userId/${user.userId}`)
        .subscribe(payments => {
          user.payments = payments; // Add payments array to each user object
        });
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
      width: '650px',
      height:'350px',
      data: { userId }

    });
  
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The details dialog was closed');
    });
    
  }
  
  getPlanName(amount: number): string {
    switch (amount) {
      case 119:
        return 'Premium Individual';
      case 210:
        return 'Premium Family';
      case 110:
        return 'Student Plan';
      default:
        return 'Unknown Plan';
    }
  }
}

