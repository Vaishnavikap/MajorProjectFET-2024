import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CategoryCardComponent } from './category-card/category-card.component';


@NgModule({
  declarations: [
    SearchComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  exports:[SearchComponent, CategoryCardComponent]
})
export class SearchModule { }
