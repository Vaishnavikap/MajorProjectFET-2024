import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './module/home/home.module';
import { RegistrationModule } from './module/registration/registration.module';
// import { SongsComponent } from './module/admin_dashboard_module/songs/songs.component';
// import { UsersComponent } from './module/admin_dashboard_module/users/users.component';
import { AdminHomeModule } from './module/admin_dashboard_module/admin-home/admin-home.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    // SongsComponent,
    // UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegistrationModule ,
    AdminHomeModule 
   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
