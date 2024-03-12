import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { SongService } from '../../../service/song.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
  @Input() results: any[]=[];

  constructor(private route: ActivatedRoute, private songService: SongService, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.results = JSON.parse(params['results'] || '[]');
    });
  }
  showSongDetail(selectedSong: any): void {
    if (selectedSong && selectedSong.customId) {
      this.router.navigate(['/home/song', selectedSong.customId]);
    } else {
      console.error('Invalid or missing song details:', selectedSong.customId);
    }
  }
}
