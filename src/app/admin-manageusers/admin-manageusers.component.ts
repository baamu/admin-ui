import { Component, OnInit,Inject } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  nic: string;
  username: string;
  email: string;
  dob: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nic: '968947338v', username: 'ABC', email: 'abc@gmail.com', dob: '03/04/1996'},
  {nic: '968947338v', username: 'ABC', email: 'abc@gmail.com', dob: '03/04/1996'},
  {nic: '968947338v', username: 'ABC', email: 'abc@gmail.com', dob: '03/04/1996'},
  {nic: '968947338v', username: 'ABC', email: 'abc@gmail.com', dob: '03/04/1996'},
  {nic: '968947338v', username: 'ABC', email: 'abc@gmail.com', dob: '03/04/1996'},
];

@Component({
  selector: 'app-admin-manageusers',
  templateUrl: './admin-manageusers.component.html',
  styleUrls: ['./admin-manageusers.component.css']
})
export class AdminManageusersComponent implements OnInit {

  displayedColumns: string[] = ['nic', 'username', 'email', 'dob', 'btns'];
  dataSource = ELEMENT_DATA;
  
  constructor(public dialog: MatDialog) {}

  openDialog(){
    this.dialog.open(PopupComponent); 
  }

  ngOnInit() {
  }

}
