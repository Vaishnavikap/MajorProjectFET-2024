// artist-card.component.ts
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {
  @Input() artist: string = '';

  constructor(private router: Router) {}

  get artistClass(): string {
    return `artist-${this.artist.toLowerCase()}`;
  }

  viewArtistSongs(artist: string): void {
    this.router.navigate(['content/artist-songs', artist]);
  }
}
