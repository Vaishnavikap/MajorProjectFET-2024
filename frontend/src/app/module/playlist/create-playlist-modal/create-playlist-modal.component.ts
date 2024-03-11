import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlaylistService } from '../../../service/playlist.service';
import { AuthserviceService } from '../../../service/authservice.service';

@Component({
  selector: 'app-create-playlist-modal',
  templateUrl: './create-playlist-modal.component.html',
  styleUrls: ['./create-playlist-modal.component.css'],
})
export class CreatePlaylistModalComponent {
  playlistName: string = '';

  constructor(
    public dialogRef: MatDialogRef<CreatePlaylistModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private playlistService: PlaylistService,
    private authService: AuthserviceService,
    private snackBar: MatSnackBar
  ) {}

  userId = this.authService.getUserId();

  onPlaylistCreate(): void {
    this.playlistService.addPlaylist(this.playlistName, this.data.selectedSongs, this.userId);

    this.snackBar.open('Playlist Created Successfully!!!', 'Dismiss', {
      duration: 3000,
    });

    this.dialogRef.close();
  }
}

