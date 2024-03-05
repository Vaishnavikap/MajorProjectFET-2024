import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaylistComponent } from './playlist.component';
import { CardComponent } from '../home/card/card.component';

const routes: Routes = [
  { path: '', component: PlaylistComponent },
  { path: 'card', component: CardComponent }, // Load CardComponent only for the /playlist route
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistRoutingModule {}

