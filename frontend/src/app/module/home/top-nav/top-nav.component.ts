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

  noDataFoundMessage: string = '';

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
      // Get the current URL from the browser
      const currentUrl = window.location.href;
  
      console.log('Current URL:', currentUrl);
  
      // Check if the current URL is related to search
      this.isSearchRoute = currentUrl.includes('search') || currentUrl.includes('search-results');
    });
  }
  

  search(event: any): void {
    const query = event?.target?.value || '';
    this.searchService.search(query).subscribe((allResults: any[]) => {
      // Filter the results based on the search query
      this.searchResults = allResults.filter(result =>
        this.matchSearchQuery(result, query)
      );

      this.noDataFoundMessage = this.searchResults.length === 0 ? 'No data found.' : '';
 

      // Navigate to the search results page with results as parameters
      this.router.navigate(['home/search-results'], { queryParams: { results: JSON.stringify(this.searchResults) } });
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
