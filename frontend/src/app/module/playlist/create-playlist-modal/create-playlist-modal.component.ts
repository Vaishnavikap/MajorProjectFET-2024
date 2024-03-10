
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlaylistService } from '../../../service/playlist.service';
import{AuthserviceService }from'../../../service/authservice.service'
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
    private AuthserviceService:AuthserviceService,
  ) {}
 userId = this.AuthserviceService.getUserId();
  onPlaylistCreate(): void {
    // Add selected songs to the playlist using the PlaylistService
    this.playlistService.addPlaylist(this.playlistName, this.data.selectedSongs,this.userId);
    this.dialogRef.close();
  }
}