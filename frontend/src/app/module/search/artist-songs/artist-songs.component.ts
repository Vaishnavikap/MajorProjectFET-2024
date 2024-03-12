// artist-songs.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from '../../../service/playlist.service';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.css']
})
export class ArtistSongsComponent implements OnInit {
  artist: string = '';
  artistSongs: any[] = [];

  constructor(private route: ActivatedRoute, private playlistService : PlaylistService, private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.artist = params['artist'];

      // Fetch artist songs based on the artist parameter
      this.playlistService.getArtistSongs(this.artist).subscribe(
        (songs: any[]) => {
          this.artistSongs = songs;
        },
        (error) => {
          console.error('Error fetching artist songs:', error);
        }
      );
    });
    console.log(this.artistSongs);
    
  }
  showSongDetail(selectedSong: any): void {
    if (selectedSong && selectedSong.customId) {
      this.router.navigate(['/home/song', selectedSong.customId]);
    } else {
      console.error('Invalid or missing song details:', selectedSong.customId);
    }
  }
}
