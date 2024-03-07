// artist-songs.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../../../service/song.service'; // Import your actual SongService

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.css']
})
export class ArtistSongsComponent  {
  // artist: string = '';
  // artistSongs: any[] = []; // Assuming your songs have a similar structure

  // constructor(private route: ActivatedRoute, private songService: SongService) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.artist = params['artist'];
  //     // Fetch artist songs based on the artist parameter
  //     this.songService.getArtistSongs(this.artist).subscribe(
  //       (songs: any[]) => {
  //         this.artistSongs = songs;
  //       },
  //       (error) => {
  //         console.error('Error fetching artist songs:', error);
  //       }
  //     );
  //   });
  // }
}
