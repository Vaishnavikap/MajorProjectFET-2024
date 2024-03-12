import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from '../../../service/playlist.service';
import { MatDialog } from '@angular/material/dialog';
import { SongService } from '../../../service/song.service';
@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlist: any = {};
  searchTerm: string = '';
  filteredSongs: any[] = [];

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService,
  private songService: SongService, 
  private router: Router,
  private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const playlistId = +params['playlistId'];
      
      if (!isNaN(playlistId)) {
        this.playlistService.getPlaylistById(playlistId).subscribe(
          playlist => {
            this.playlist = playlist;
            this.filteredSongs = [...playlist.songs]; 
          },
          error => {
            console.error('Error fetching playlist:', error);

          }
        );
      }
    });
  }

  
  filterSongs(): void {
    this.filteredSongs = this.playlist.songs.filter(song =>
      song.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  showSongDetail(selectedSong: any): void {
    if (selectedSong && selectedSong.customId) {
      this.router.navigate(['/home/song', selectedSong.customId]);
    } else {
      console.error('Invalid or missing song details:', selectedSong.customId);
    }
  }
}