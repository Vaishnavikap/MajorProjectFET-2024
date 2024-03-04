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
import { ReactiveFormsModule } from '@angular/forms';


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
    RouterModule,
    AuthenticationModule,
    ReactiveFormsModule
  ],
  exports:[SideBarComponent,TopNavComponent, FooterComponent, HomeComponent, CardComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
