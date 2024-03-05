import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailComponent } from './module/home/song-detail/song-detail.component';

const routes: Routes = [

  // {
  //   path: 'home',
  //   loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
  // },
  // {
  //   path: 'search',
  //   loadChildren: () => import('./module/search/search.module').then(m => m.SearchModule),
  // },
  // {
  //   path: 'library',
  //   loadChildren: () => import('./module/library/library.module').then(m => m.LibraryModule),
  // },
  // {
  //   path: 'playlist',
  //   loadChildren: () => import('./module/playlist/playlist.module').then(m => m.PlaylistModule),
  // },
  // {
  //   path: 'premium',
  //   loadChildren: () => import('./module/premium/premium.module').then(m => m.PremiumModule),
  // },
  // { path: 'song/:id', component: SongDetailComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
