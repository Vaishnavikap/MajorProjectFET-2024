import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchComponent,
    CategoryCardComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule
  ],
  exports:[SearchComponent, CategoryCardComponent]
})
export class SearchModule { }
