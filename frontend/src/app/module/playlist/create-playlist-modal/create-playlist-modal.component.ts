// create-playlist-modal.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-playlist-modal',
  templateUrl: './create-playlist-modal.component.html',
  styleUrls: ['./create-playlist-modal.component.css']
})
export class CreatePlaylistModalComponent {
  playlistName: string = '';

  constructor(
    public dialogRef: MatDialogRef<CreatePlaylistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { selectedSongs: any[] }
  ) {}

  onPlaylistCreate(): void {
    // Close the dialog and pass back the playlist name
    this.dialogRef.close(this.playlistName);
  }
}
