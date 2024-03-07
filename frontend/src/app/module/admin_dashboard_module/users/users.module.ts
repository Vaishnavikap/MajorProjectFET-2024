import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';

import { EditUserComponent } from './edit-user/edit-user.component';



@NgModule({
  declarations: [
    UserComponent,
    EditUserComponent,
   
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],exports:[UserComponent,EditUserComponent ]
})
export class UsersModule { }
