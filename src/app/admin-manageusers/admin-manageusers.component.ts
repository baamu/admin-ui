import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-manageusers',
  templateUrl: './admin-manageusers.component.html',
  styleUrls: ['./admin-manageusers.component.css']
})
export class AdminManageusersComponent implements OnInit {

  displayedColumns: string[] = ['nic', 'username', 'email', 'dob','delete_update'];

  constructor() { }

  ngOnInit() {
  }

}
