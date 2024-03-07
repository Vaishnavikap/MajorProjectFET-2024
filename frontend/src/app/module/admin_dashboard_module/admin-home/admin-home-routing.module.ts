import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [

  { 
    path: 'admin', 
    component:AdminHomeComponent,
    children: [
      { path: '', redirectTo: 'Users', pathMatch: 'full' }, // Redirect to 'Users' by default
      { path: 'Users', loadChildren: () => import('../../admin_dashboard_module/users/users.module').then(m => m.UsersModule) }, 
      { path: 'Songs', loadChildren: () => import('../../admin_dashboard_module/songs/songs.module').then(m => m.SongsModule) }, 
      // Add other child routes as needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
