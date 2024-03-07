import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { HomeModule } from '../home/home.module';
import { FormsModule } from '@angular/forms';
import { CreatePlaylistModalComponent } from './create-playlist-modal/create-playlist-modal.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PlaylistComponent,
    CreatePlaylistModalComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    HomeModule,
    FormsModule,
    MatDialogModule
  ],
})
export class PlaylistModule { }
