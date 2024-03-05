import { Component, OnInit } from '@angular/core';
import { SongService } from '../../../service/song.service';

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
  // cards: Card[] = [
  //   { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 1', showPlayIcon: false },
  //   { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 2', showPlayIcon: false },
  //   { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 3', showPlayIcon: false },
  //   { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 4', showPlayIcon: false },
  //   { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 5', showPlayIcon: false }
  // ];

  togglePlayIcon(card: Card) {
    card.showPlayIcon = !card.showPlayIcon;
  }

  songs: any[] = [];

  constructor(private songService: SongService) {}

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
}
