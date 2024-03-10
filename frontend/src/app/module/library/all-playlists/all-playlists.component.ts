import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../service/playlist.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../service/authservice.service';

@Component({
  selector: 'app-all-playlists',
  templateUrl: './all-playlists.component.html',
  styleUrls: ['./all-playlists.component.css'] 
})
export class AllPlaylistsComponent implements OnInit {
  playlists: any[] = [];

  constructor(
    private playlistService: PlaylistService,
    private authService: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    if (userId) {
      this.playlistService.getPlaylistsByUserId(userId).subscribe(
        (playlists) => {
          this.playlists = playlists;
        },
        (error) => {
          console.error('Error fetching playlists:', error);
          // Handle error
        }
      );
    } else {
      console.error('User ID not available');
      // Handle the case where the user ID is not available
    }
  }


  toggleSongs(playlist: any): void {
    // Toggle the showSongs property to display/hide songs
    playlist.showSongs = !playlist.showSongs;
  }
  
  navigateToDetail(playlist: any): void {
    console.log('Selected Playlist:', playlist);
    this.router.navigate(['/home/playlist', playlist.playlistId]);
  }
}
