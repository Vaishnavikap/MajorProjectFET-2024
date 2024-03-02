import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    SideBarComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ],
  exports:[SideBarComponent,TopNavComponent, FooterComponent, HomeComponent, CardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
