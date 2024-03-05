import { Component } from '@angular/core';
import { PlaylistService } from '../../service/playlist.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  playlists: any[] = [];
  selectedPlaylist: any = null;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.fetchPlaylists();
  }

  fetchPlaylists(): void {

    this.playlists = this.playlistService.getPlaylists();
  }

  showSelectedSongs(playlist: any): void {
    this.selectedPlaylist = this.selectedPlaylist === playlist ? null : playlist;
  }
}
