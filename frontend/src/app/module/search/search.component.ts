import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artists: string[] = ['Arijit Singh', 'Amit Trivedi', 'Armaan Malik'];

  constructor(private router: Router) {}

  viewSongsByArtist(artist: string): void {
    this.router.navigate(['/artist-songs', artist]);
}
}
