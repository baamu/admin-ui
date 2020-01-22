import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminAdduserComponent } from './admin-adduser/admin-adduser.component';
import { AdminHistoryComponent } from './admin-history/admin-history.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminManageusersComponent } from './admin-manageusers/admin-manageusers.component';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { AdminRepositoryComponent } from './admin-repository/admin-repository.component';


const routes: Routes = [
  
  {path: 'adduser', component: AdminAdduserComponent},
  {path: 'history', component: AdminHistoryComponent},
  {path: 'login', component: AdminLoginComponent},
  {path: 'manageuser', component: AdminManageusersComponent},
  {path: 'report', component: AdminReportComponent},
  {path: 'repository', component: AdminRepositoryComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { 
  static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error("Method not implemented.");
  }
  
}

export const routingComponents = [AdminLoginComponent]

function newFunction(): string {
  return 'Searchlinks';
}


