// all-playlists.component.ts

import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../service/playlist.service';

@Component({
  selector: 'app-all-playlists',
  templateUrl: './all-playlists.component.html',
  styleUrls: ['./all-playlists.component.css'] // Link the CSS file
})
export class AllPlaylistsComponent implements OnInit {
  playlists: any[] = [];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
    this.playlistService.getPlaylists().subscribe(
      playlists => {
        this.playlists = playlists;
      },
      error => {
        console.error('Error fetching playlists:', error);
        // Handle error
      }
    );
  }

  toggleSongs(playlist: any): void {
    // Toggle the showSongs property to display/hide songs
    playlist.showSongs = !playlist.showSongs;
  }
  
}
