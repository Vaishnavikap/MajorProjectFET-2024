// artist-songs.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../service/playlist.service';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.css']
})
export class ArtistSongsComponent implements OnInit {
  artist: string = '';
  artistSongs: any[] = [];

  constructor(private route: ActivatedRoute, private playlistService : PlaylistService) {}

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
}
