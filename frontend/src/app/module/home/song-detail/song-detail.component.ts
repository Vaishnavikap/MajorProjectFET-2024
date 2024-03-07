import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  song: any; // Ensure you have this property
 

  constructor(
    private route: ActivatedRoute,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const songId = params.get('id');
      if (songId) {
        // Fetch the song details based on the ID
        this.songService.getSongById(songId).subscribe(
          (data: any) => {
            this.song = data;
            

            


          },
          (error: any) => {
            console.error('Error fetching song details:', error);
          }
        );
      }
    });
  }
}
