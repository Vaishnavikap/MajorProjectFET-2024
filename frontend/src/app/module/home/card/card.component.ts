import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../service/song.service';
import { Router } from '@angular/router'; 

interface Card {
  image: string;
  title: string;
  showPlayIcon: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  togglePlayIcon(card: Card) {
    card.showPlayIcon = !card.showPlayIcon;
  }

  songs: any[] = [];

  constructor(private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs().subscribe(
      (data) => {
        this.songs = data;
        console.log('Songs:', this.songs);
      },
      (error) => {
        console.error('Error fetching songs:', error);
      }
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