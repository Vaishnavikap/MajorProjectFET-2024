import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-admin-topnav',
  templateUrl: './admin-topnav.component.html',
  styleUrls: ['./admin-topnav.component.css']
})
export class AdminTopnavComponent implements OnInit {
  admins$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAdmin();
  }

  fetchAdmin(): void {
    this.admins$ = this.http.get<any[]>('http://localhost:3000/user').pipe(
      catchError(error => {
        console.error('Error fetching admins:', error);
        // Handle the error, such as displaying an error message to the user
        return throwError('Failed to fetch admins. Please try again later.');
      })
    );
  }

  getAdminFirstName(admins: any[]): string {
    const admin = admins.find(admin => admin.isAdmin);
    return admin ? admin.FirstName : '';
  }
}
