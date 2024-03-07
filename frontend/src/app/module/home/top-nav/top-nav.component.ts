import { Component, OnInit } from '@angular/core';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../authentication/login/login.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SearchService } from '../../../service/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
 
  isSearchRoute: boolean = false;

  searchResults: any[] = [];

  constructor(private dialog: MatDialog, private router: Router, private searchService: SearchService, private activatedRoute: ActivatedRoute) {}

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
 
  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      // Get the current route from the activated route
      const currentRoute = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
      console.log('Current Route:', currentRoute);
      
      // Check if the current route is either 'search' or 'search-results'
      this.isSearchRoute = currentRoute === 'search' || currentRoute === 'search-results';
    });
  }

  search(event: any): void {
    const query = event?.target?.value || '';
    this.searchService.search(query).subscribe((allResults: any[]) => {
      // Filter the results based on the search query
      this.searchResults = allResults.filter(result =>
        this.matchSearchQuery(result, query)
      );

      // Navigate to the search results page with results as parameters
      this.router.navigate(['/search-results'], { queryParams: { results: JSON.stringify(this.searchResults) } });
    });
  }

  matchSearchQuery(result: any, query: string): boolean {
    // Customize this function based on your search criteria
    const titleMatch = result.title.toLowerCase().includes(query.toLowerCase());
    const artistMatch = result.artist.toLowerCase().includes(query.toLowerCase());
    const albumMatch = result.album.toLowerCase().includes(query.toLowerCase());

    return titleMatch || artistMatch || albumMatch;
  }

}
