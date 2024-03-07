import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../service/playlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-playlists',
  templateUrl: './all-playlists.component.html',
  styleUrls: ['./all-playlists.component.css'] 
})
export class AllPlaylistsComponent implements OnInit {
  playlists: any[] = [];

  constructor(private playlistService: PlaylistService, private router: Router ) { }

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
  
  navigateToDetail(playlist: any): void {
    console.log('Selected Playlist:', playlist);
    this.router.navigate(['/playlist', playlist.playlistId]);
  }
}
