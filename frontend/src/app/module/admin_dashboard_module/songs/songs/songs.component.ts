import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SongUploadComponent } from '../song-upload/song-upload.component';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  constructor(private dialog: MatDialog) { }

  // Method to open the modal dialog
  openAddSongDialog(): void {
    const dialogRef = this.dialog.open(SongUploadComponent , {
      width: '400px', // Set the width of the dialog
      disableClose: true, // Prevent closing the dialog by clicking outside or pressing Escape
    });

    // Subscribe to the afterClosed event to perform any action after the dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
