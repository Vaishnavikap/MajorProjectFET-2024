// songs.component.ts
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
  itemsPerPage: number = 6;

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
      });
  }

  nextPage(): void {
    this.currentPage++;
    this.fetchSongs();
  }

  previousPage(): void {
    this.currentPage--;
    this.fetchSongs();
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.fetchSongs();
  }

  get pages(): number[] {
    const totalSongs = this.songs.length; // Assuming you have the total number of songs
    const totalPages = Math.ceil(totalSongs / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  openAddSongDialog(): void {
    const dialogRef = this.dialog.open(SongUploadComponent , {
      width: '400px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.fetchSongs(); // Refresh songs after adding a new one
    });
  }

  deleteSong(Id: Number): void {
    this.http.delete(`http://localhost:3000/song/deleteSong/`+Id)
      .subscribe(() => {
        this.fetchSongs(); // After successful deletion, refresh the song list
      });
  }
}
