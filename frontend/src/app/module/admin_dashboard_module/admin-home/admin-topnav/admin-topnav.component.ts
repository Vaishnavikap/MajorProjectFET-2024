import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-topnav',
  templateUrl: './admin-topnav.component.html',
  styleUrls: ['./admin-topnav.component.css']
})
export class AdminTopnavComponent implements OnInit {
  admins: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAdmin();
  }

  fetchAdmin(): void {
    this.http.get<any[]>('http://localhost:3000/user')
      .subscribe(admins => {
        this.admins = admins; // Assign fetched admins to the admins array
      });
  }
}
