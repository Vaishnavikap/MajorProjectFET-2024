import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { RouterModule } from '@angular/router';
import { AllPlaylistsComponent } from './all-playlists/all-playlists.component';



@NgModule({
  declarations: [
    LibraryComponent,
    AllPlaylistsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    RouterModule
  ]
})
export class LibraryModule { }
