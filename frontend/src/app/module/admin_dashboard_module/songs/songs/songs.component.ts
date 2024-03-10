import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SongUploadComponent } from '../song-upload/song-upload.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number=0;

  constructor(
    private dialog: MatDialog,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.fetchSongs();
  }

  fetchSongs():void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.http.get<any[]>('http://localhost:3000/getsong')
      .subscribe(songs => {
        this.songs = songs.slice(startIndex, endIndex);
        this.totalPages = Math.ceil(songs.length / this.itemsPerPage);
      });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log("current page", this.currentPage);
      
      this.fetchSongs();
    }
  
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchSongs();
    }
  }



  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchSongs(); // Assuming fetchSongs method fetches songs for the selected page
    }
  }
  
  get pages(): number[] {
    const totalSongs = this.songs.length; // Assuming you have the total number of songs
    const totalPages = Math.ceil(totalSongs / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  openAddSongDialog(): void {
    const dialogRef = this.dialog.open(SongUploadComponent , {
      width: '400px',
      height:"600px",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchSongs(); 
    });
  }

  deleteSong(Id: Number): void {
    this.http.delete(`http://localhost:3000/deleteSong/`+Id)
      .subscribe(() => {
        this.fetchSongs(); // After successful deletion, refresh the song list
      });
  }
}
