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
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number=0;


  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.http.get<any[]>('http://localhost:3000/user')
      .subscribe(users => {
        this.users = users.slice(startIndex, endIndex);
        this.totalPages = Math.ceil(users.length / this.itemsPerPage);
      });
  }

  fetchPaymentsForUsers(): void {
    this.users.forEach(user => {
      this.http.get<any[]>(`http://localhost:3000/payment/userId/${user.userId}`)
        .subscribe(payments => {
          user.payments = payments; 
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
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log("current page", this.currentPage);
      
      this. fetchUsers();
    }
  
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this. fetchUsers();
    }
  }



  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this. fetchUsers(); // Assuming fetchSongs method fetches songs for the selected page
    }
  }
  
  get pages(): number[] {
    const totalUsers = this.users.length; // Assuming you have the total number of songs
    const totalPages = Math.ceil(totalUsers / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
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

