import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    SideBarComponent,
    TopNavComponent,
    FooterComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[SideBarComponent,TopNavComponent, FooterComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
