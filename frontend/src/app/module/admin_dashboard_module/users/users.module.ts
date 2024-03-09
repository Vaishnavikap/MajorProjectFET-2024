import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent
  
   
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatIconModule ,
    MatDialogModule
  ],exports:[
    UserComponent , UserDetailComponent
  ]
})
export class UsersModule { }
