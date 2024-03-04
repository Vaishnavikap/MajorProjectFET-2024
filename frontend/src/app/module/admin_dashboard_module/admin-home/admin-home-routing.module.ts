import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  { path: 'Home', loadChildren: () => import('../../admin_dashboard_module/admin-home/admin-home.module').then(m => m.AdminHomeModule) },
  { path: 'Users', loadChildren: () => import('../../admin_dashboard_module/users/users.module').then(m => m.UsersModule ) }, 
  { path: 'Songs', loadChildren: () => import('../../admin_dashboard_module/songs/songs.module').then(m => m.SongsModule ) }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }