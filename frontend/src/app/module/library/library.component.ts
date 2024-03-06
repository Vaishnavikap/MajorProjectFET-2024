import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../../service/playlist.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  playlists: any[] = [];
  selectedPlaylist: any = null;

  constructor(private playlistService: PlaylistService, private router: Router) { }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists(): void {
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

  showMyPlaylists(): void {
    // Navigate to the 'All Playlist' page
    this.router.navigate(['/library/all-playlist']);
  }

}
