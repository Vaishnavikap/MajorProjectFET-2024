// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { MatDialog } from '@angular/material/dialog';
// import { CreatePlaylistModalComponent } from './create-playlist-modal/create-playlist-modal.component';
// import { PlaylistService } from '../../service/playlist.service';

// @Component({
//   selector: 'app-playlist',
//   templateUrl: './playlist.component.html',
//   styleUrls: ['./playlist.component.css'],
// })
// export class PlaylistComponent implements OnInit {
//   songs: any[] = [];
//   playlists: any[] = [];
//   newPlaylistName: string = '';
//   currentPlaylistName: string = '';
//   showCreatePlaylist: boolean = false;
//   selectedSongs: Set<any> = new Set<any>();
//   showAddToPlaylistButton: boolean = false; // Add this line
//   selectedSong: any; // Variable to store the selected song

//   constructor(
//     private http: HttpClient,
//     private dialog: MatDialog,
//     private playlistService: PlaylistService
//   ) {}

//   ngOnInit(): void {
//     this.fetchSongs();
//   }

//   fetchSongs(): void {
//     this.http.get<any[]>('http://localhost:3000/getsong').subscribe(
//       (data) => {
//         console.log('Fetched songs:', data);
//         this.songs = data;
//       },
//       (error) => {
//         console.error('Error fetching songs:', error);
//       }
//     );
//   }

//   addToPlaylist(song: any): void {
//     // Toggle the selected state of the song
//     if (this.selectedSongs.has(song)) {
//       this.selectedSongs.delete(song);
//     } else {
//       this.selectedSongs.add(song);
//     }

//     // Update the flag based on the selected songs
//     this.showAddToPlaylistButton = this.selectedSongs.size > 0;
//     console.log('Added to playlist:', song);
//   }

//   addSelectedToPlaylist(): void {
//     const dialogRef = this.dialog.open(CreatePlaylistModalComponent, {
//       data: { selectedSongs: Array.from(this.selectedSongs) },
//     });

//     dialogRef.afterClosed().subscribe((playlistName: string) => {
//       if (playlistName) {
//         // Add selected songs to the playlist
//         this.playlistService.addPlaylist(playlistName, Array.from(this.selectedSongs));

//         // Clear the selected songs set after adding to the playlist
//         this.selectedSongs.clear();
//       }
//     });
//   }

//   createPlaylist(): void {
//     if (this.newPlaylistName.trim() !== '') {
//       this.currentPlaylistName = this.newPlaylistName;
//       this.newPlaylistName = '';
//     }
//   }

//   toggleCreatePlaylist(): void {
//     this.showCreatePlaylist = !this.showCreatePlaylist;
//   }

//   isSongSelected(song: any): boolean {
//     return this.selectedSongs.has(song);
//   }

//   // showSelectedSongs(playlist: any): void {
//   //   // Assume the first song in the playlist is selected
//   //   this.selectedSong = playlist.songs[0];
//   // }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreatePlaylistModalComponent } from './create-playlist-modal/create-playlist-modal.component';
import { PlaylistService } from '../../service/playlist.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css',
})
export class PlaylistComponent implements OnInit {
  songs: any[] = [];
  playlists: any[] = [];
  newPlaylistName: string = '';
  currentPlaylistName: string = '';
  showCreatePlaylist: boolean = false;
  selectedSongs: Set<any> = new Set<any>();
  showAddToPlaylistButton: boolean = false;
  selectedSong: any;

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private playlistService: PlaylistService
  ) {}

  ngOnInit(): void {
    this.fetchSongs();
    this.fetchPlaylists(); // Fetch playlists on component initialization
  }

  fetchSongs(): void {
    this.http.get<any[]>('http://localhost:3000/getsong').subscribe(
      (data) => {
        console.log('Fetched songs:', data);
        this.songs = data;
      },
      (error) => {
        console.error('Error fetching songs:', error);
      }
    );
  }

  fetchPlaylists(): void {
    // Fetch playlists using the PlaylistService
    this.playlistService.getPlaylists().subscribe(
      (data) => {
        console.log('Fetched playlists:', data);
        this.playlists = data;
      },
      (error) => {
        console.error('Error fetching playlists:', error);
      }
    );
  }

  addToPlaylist(song: any): void {
    // Toggle the selected state of the song
    if (this.selectedSongs.has(song)) {
      this.selectedSongs.delete(song);
    } else {
      this.selectedSongs.add(song);
    }

    // Update the flag based on the selected songs
    this.showAddToPlaylistButton = this.selectedSongs.size > 0;
    console.log('Added to playlist:', song);
  }

  addSelectedToPlaylist(): void {
    const dialogRef = this.dialog.open(CreatePlaylistModalComponent, {
      data: { selectedSongs: Array.from(this.selectedSongs) },
    });

    dialogRef.afterClosed().subscribe(() => {
      // Clear the selected songs set after closing the modal
      this.selectedSongs.clear();
      // Fetch playlists again to update the list
      this.fetchPlaylists();
    });
  }

  createPlaylist(): void {
    if (this.newPlaylistName.trim() !== '') {
      this.currentPlaylistName = this.newPlaylistName;
      this.newPlaylistName = '';
    }
  }

  toggleCreatePlaylist(): void {
    this.showCreatePlaylist = !this.showCreatePlaylist;
  }

  isSongSelected(song: any): boolean {
    return this.selectedSongs.has(song);
  }

  showSelectedSongs(playlist: any): void {
    // Update the selectedSong variable
    this.selectedSong = playlist.songs[0];
  }
}
