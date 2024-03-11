import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../service/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: any = {};
  searchTerm: string = '';
  filteredSongs: any[] = [];

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const playlistId = +params['playlistId'];
      
      if (!isNaN(playlistId)) {
        this.playlistService.getPlaylistById(playlistId).subscribe(
          playlist => {
            this.playlist = playlist;
            this.filteredSongs = [...playlist.songs]; // Initialize filteredSongs with all songs
          },
          error => {
            console.error('Error fetching playlist:', error);
            // Handle error
          }
        );
      }
    });
  }

  // Function to filter songs based on the search term
  filterSongs(): void {
    this.filteredSongs = this.playlist.songs.filter(song =>
      song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}