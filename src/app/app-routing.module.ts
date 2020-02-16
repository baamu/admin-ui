
import { Routes, RouterModule } from '@angular/router';


import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManageusersComponent } from './admin-manageusers/admin-manageusers.component';
import { AdminRepositoryComponent } from './admin-repository/admin-repository.component';
import { AdminManagedownloadComponent } from './admin-managedownload/admin-managedownload.component';
import { PopupComponent } from './popup/popup.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  
  {path: 'history', component: AdminHistoryComponent},
  {path: 'login', component: AdminLoginComponent},
  {path: 'manageuser', component: AdminManageusersComponent},
  {path: 'repository', component: AdminRepositoryComponent},
  {path: 'managedownload', component: AdminManagedownloadComponent},
  {path: 'popup', component: PopupComponent},
  {path: '', redirectTo: 'managedownload', pathMatch: 'full'},
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { 
  
}

export const routingComponents = [AdminLoginComponent]

function newFunction(): string {
  return 'Searchlinks';
}


