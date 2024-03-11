import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SearchResultComponent } from '../search/search-result/search-result.component';
import { AllPlaylistsComponent } from '../library/all-playlists/all-playlists.component';
import { PlaylistDetailComponent } from '../library/playlist-detail/playlist-detail.component';
import { ArtistSongsComponent } from '../search/artist-songs/artist-songs.component';

import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent,

   children: [
    
     { path: 'song/:id', component: SongDetailComponent },
     { path: 'library/all-playlist', component: AllPlaylistsComponent },
     { path: 'search-results', component: SearchResultComponent },
     { path: 'playlist/:playlistId', component: PlaylistDetailComponent },
     { path: 'artist-songs/:artist', component: ArtistSongsComponent },
     {
       path: 'search',
       loadChildren: () => import('../../module/search/search.module').then(m => m.SearchModule),
     },
     {
       path: 'library',
       loadChildren: () => import('../../module/library/library.module').then(m => m.LibraryModule),
     },
     {
       path: 'playlist',
       loadChildren: () => import('../../module/playlist/playlist.module').then(m => m.PlaylistModule),canActivate: [AuthGuard]
     },
     {
       path: 'premium',
       loadChildren: () => import('../../module/premium/premium.module').then(m => m.PremiumModule),
     }
   ]
 }
 // { path: 'song/:id', component: SongDetailComponent },
 // { path: 'library/all-playlist', component: AllPlaylistsComponent },
 // { path: 'search-results', component: SearchResultComponent },
 // { path: 'playlist/:playlistId', component: PlaylistDetailComponent },
 // { path: 'artist-songs/:artist', component: ArtistSongsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
