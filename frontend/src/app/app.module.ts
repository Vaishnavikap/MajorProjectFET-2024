import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './module/home/home.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  
    AppRoutingModule,
    HomeModule
   
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
