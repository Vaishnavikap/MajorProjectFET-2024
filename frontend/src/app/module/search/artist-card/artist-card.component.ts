// // artist-card.component.ts
// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-artist-card',
//   templateUrl: './artist-card.component.html',
//   styleUrls: ['./artist-card.component.css']
// })
// export class ArtistCardComponent {
//   @Input() artist: string = '';

//   constructor(private router: Router) {}

//   get artistClass(): string {
//     return `artist-${this.artist.toLowerCase()}`;
//   }

//   viewArtistSongs(artist: string): void {
//     this.router.navigate(['home/artist-songs', artist]);
//   }
//} 
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
 })
 export class ArtistCardComponent {
  @Input() artist: any = '';

  constructor(private router: Router) {}

  get artistClass(): string {
    if (typeof this.artist === 'string') {
      return `artist-${this.artist.toLowerCase()}`;
    } else if (this.artist && typeof this.artist === 'object' && this.artist.artist) {
      // Assuming the artist's name is in the 'artist' property of the object
      return `artist-${this.artist.artist.toLowerCase()}`;
    } else {
      console.error('Invalid artist data:', this.artist);
      return ''; // Return empty string or handle the error as needed
    }
  }

  viewArtistSongs(artist: string): void {
    if (typeof this.artist === 'string') {
      this.router.navigate(['home/artist-songs', this.artist]);
    } else if (this.artist && typeof this.artist === 'object' && this.artist.artist) {
      // Assuming the artist's name is in the 'artist' property of the object
      this.router.navigate(['home/artist-songs', this.artist.artist]);
    }
  }
}
