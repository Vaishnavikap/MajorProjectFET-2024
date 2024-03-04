import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './module/home/home.module';

import { AdminHomeModule } from './module/admin_dashboard_module/admin-home/admin-home.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
  
    AppRoutingModule,
    ReactiveFormsModule,
    AdminHomeModule ,
    HomeModule
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
