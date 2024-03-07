import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';
import { AllPlaylistsComponent } from '../library/all-playlists/all-playlists.component';


const routes: Routes = [
  { path: '', component: LibraryComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
