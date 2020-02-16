import { Component, OnInit,Inject, ViewChild } from '@angular/core';
import { PopupComponent, User } from '../popup/popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppService } from '../app.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-manageusers',
  templateUrl: './admin-manageusers.component.html',
  styleUrls: ['./admin-manageusers.component.css']
})
export class AdminManageusersComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['username', 'email', 'name', 'dob','nic', 'btns'];
  datasource : MatTableDataSource<User> = new MatTableDataSource();
  
  constructor(public dialog: MatDialog, private service: AppService) {}

  openDialog(username, email, name, dob, nic){
    
    this.dialog.open(PopupComponent, {
      // width : "550px",
      // height : "950px",
      data : {
      username: username,
      email : email,
      name : name,
      nic : nic,
      dob : dob
    }
  }); 
  }

  ngOnInit() {
    this.loadUsers();
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  loadUsers() {
    this.service.getUsers().subscribe(response =>{
      this.datasource.data = response;
    })
  }

  applyFilter(filtervalue:string) {
    this.datasource.filter = filtervalue.trim().toLowerCase();
    if (this.datasource.paginator){
      this.datasource.paginator.firstPage();
    }

  }

}
