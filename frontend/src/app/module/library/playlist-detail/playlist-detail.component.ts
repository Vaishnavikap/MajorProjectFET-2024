// playlist-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../service/playlist.service';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css'] // Correct the property name to 'styleUrls'
})
export class PlaylistDetailComponent implements OnInit {
  playlist: any = {};

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const playlistId = +params['playlistId']; // Use the unary plus operator to convert to a number
      
      if (!isNaN(playlistId)) {
        this.playlistService.getPlaylistById(playlistId).subscribe(
          playlist => {
            this.playlist = playlist;
          },
          error => {
            console.error('Error fetching playlist:', error);
            // Handle error
          }
        );
      }
    });
  }
}
