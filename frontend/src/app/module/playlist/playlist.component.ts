// playlist.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreatePlaylistModalComponent } from './create-playlist-modal/create-playlist-modal.component';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  songs: any[] = [];
  playlist: any[] = [];
  newPlaylistName: string = '';
  currentPlaylistName: string = '';
  showCreatePlaylist: boolean = false;
  selectedSongs: Set<any> = new Set<any>(); // To store selected songs

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchSongs();
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

  addToPlaylist(song: any): void {
    // Toggle the selected state of the song
    if (this.selectedSongs.has(song)) {
      this.selectedSongs.delete(song);
    } else {
      this.selectedSongs.add(song);
    }

    console.log('Added to playlist:', song);
  }

  addSelectedToPlaylist(): void {
    // Open the modal
    const dialogRef = this.dialog.open(CreatePlaylistModalComponent, {
      data: { selectedSongs: Array.from(this.selectedSongs) }
    });

    // Subscribe to the dialog's result
    dialogRef.afterClosed().subscribe((playlistName: string) => {
      if (playlistName) {
        // Add selected songs to the playlist
        this.playlist.push(...Array.from(this.selectedSongs).map(song => ({ ...song, playlistName })));

        // Clear the selected songs set after adding to the playlist
        this.selectedSongs.clear();
      }
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
}
