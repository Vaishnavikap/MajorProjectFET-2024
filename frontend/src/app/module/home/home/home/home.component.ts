import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  
  isHomeRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Get the current route from the router's state
      const currentRoute = this.router.routerState.root.snapshot.firstChild?.routeConfig?.path;
      console.log('Current Route:', currentRoute);
      this.isHomeRoute = currentRoute === 'home';
    });
  }

}