import { Component } from '@angular/core';

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
export class CardComponent {
  cards: Card[] = [
    { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 1', showPlayIcon: false },
    { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 2', showPlayIcon: false },
    { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 3', showPlayIcon: false },
    { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 4', showPlayIcon: false },
    { image: '../../../../assets/songsimages/128Chaleya - Jawan 128 Kbps.jpg', title: 'Card Title 5', showPlayIcon: false }
  ];

  togglePlayIcon(card: Card) {
    card.showPlayIcon = !card.showPlayIcon;
  }
}
