import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  playlists: any[] = [];

  addPlaylist(name: string, songs: any[]): void {
    this.playlists.push({ name, songs });

    console.log('Playlists:', this.playlists);
  }

  getPlaylists(): any[] {
    return this.playlists;
  }
}
