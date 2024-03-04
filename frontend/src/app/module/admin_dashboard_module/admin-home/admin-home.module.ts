import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminTopnavComponent } from './admin-topnav/admin-topnav.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminTopnavComponent
  ],
  imports: [
    CommonModule,
    AdminHomeRoutingModule
  ],exports:[AdminHomeComponent,AdminSidebarComponent,AdminTopnavComponent  ]
})
export class AdminHomeModule { }
