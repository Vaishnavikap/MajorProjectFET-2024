import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home/home.component';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SongDetailComponent } from './song-detail/song-detail.component';


@NgModule({
  declarations: [
    SideBarComponent,
    TopNavComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    SongDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    AuthenticationModule,
    ReactiveFormsModule
  ],
  exports:[SideBarComponent,SongDetailComponent ,TopNavComponent, FooterComponent, HomeComponent, CardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
