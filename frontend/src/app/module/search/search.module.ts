import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { ArtistCardComponent } from './artist-card/artist-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ArtistSongsComponent } from './artist-songs/artist-songs.component';


@NgModule({
  declarations: [
    SearchComponent,
    SearchResultComponent,
    ArtistCardComponent,
    ArtistSongsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[SearchComponent, ArtistCardComponent]
})
export class SearchModule { }
