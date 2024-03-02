import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs/songs.component';
import { SongUploadComponent } from './song-upload/song-upload.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SongUploadService } from '../../../service/song-upload.service';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    SongsComponent,
    SongUploadComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule ,
    MatDialogModule,
    MatIconModule
  ],
  providers:[SongUploadService ]
})
export class SongsModule { }
