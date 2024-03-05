import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../authentication/login/login.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {}

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
  isSearchRoute: boolean = false;

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Get the current route from the router's state
      const currentRoute = this.router.routerState.root.snapshot.firstChild?.routeConfig?.path;
      console.log('Current Route:', currentRoute);
      this.isSearchRoute = currentRoute === 'search';
    });
}
}
