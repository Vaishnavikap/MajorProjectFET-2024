import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../../service/playlist.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../../service/authservice.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar 
  ) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
    const userId = this.authService.getUserId();

    if (userId) {
      this.playlistService.getPlaylistsByUserId(userId).subscribe(
        (playlists) => {
          this.playlists = playlists;
        },
        (error) => {
          console.error('Error fetching playlists:', error);

        }
      );
    } else {
      console.error('User ID not available');
    
    }
  }

  toggleSongs(playlist: any): void {
   playlist.showSongs = !playlist.showSongs;
  }
  
  navigateToDetail(playlist: any): void {
    console.log('Selected Playlist:', playlist);
    this.router.navigate(['/home/playlist', playlist.playlistId]);
  }

  deletePlaylist(playlistId: number, event: Event): void {
    
    event.stopPropagation();
  
    
    this.playlistService.deletePlaylist(playlistId).subscribe(
      () => {
        console.log('Playlist deleted successfully');

        
        this.showSnackBar('Playlist Deleted Successfully');

        
        this.loadPlaylists();
      },
      (error) => {
        console.error('Error deleting playlist:', error);
         }
    );
  }

  private showSnackBar(message: string): void {
    const snackBarConfig: MatSnackBarConfig = {
      duration: 3000,
      verticalPosition: 'top',
    };

    this.snackBar.open("Playlist Deleted Successfully", 'Dismiss', snackBarConfig);
  }
}
