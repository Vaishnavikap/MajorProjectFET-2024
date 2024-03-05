import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  categories: string[] = ['Hindi', 'Rock', 'Pop', 'Jazz', 'Hip-Hop', 'Classical', 'Love', 'Party'];

}
