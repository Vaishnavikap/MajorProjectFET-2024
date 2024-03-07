// artist-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.css']
})
export class ArtistCardComponent {
  @Input() artist: string = '';
  @Output() viewSongs = new EventEmitter<string>();

  get artistClass(): string {
    return `artist-${this.artist.toLowerCase()}`;
  }

  viewArtistSongs(artist: string): void {
    this.viewSongs.emit(artist);
  }
}
