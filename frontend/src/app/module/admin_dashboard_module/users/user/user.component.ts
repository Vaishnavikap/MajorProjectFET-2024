import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { EditUserComponent } from '../edit-user/edit-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  
  

  constructor(
    
    private dialog: MatDialog,
    private http: HttpClient) { }
  users: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 7;
  totalPages: number=20;

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(): void {  
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.http.get<any[]>('http://localhost:3000/user')
      .subscribe(users => {
        this.users = users.slice(startIndex, endIndex);
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


  // openEditDailog(){
  //   const dialogRef = this.dialog.open(EditUserComponent , {
  //     width: '400px',
  //     disableClose: true,
  //   });
  // }







}