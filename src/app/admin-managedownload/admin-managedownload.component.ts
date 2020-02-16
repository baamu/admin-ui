import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  size: string;
  completed: string;
  remain: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'abc', size: '57MB', completed: '25MB', remain: '32MB'},
  {name: 'gft', size: '57MB', completed: '25MB', remain: '32MB'},
  {name: 'vcx', size: '57MB', completed: '25MB', remain: '32MB'},
  {name: 'ewq', size: '57MB', completed: '25MB', remain: '32MB'},
  {name: 'pyt', size: '57MB', completed: '25MB', remain: '32MB'},
];


@Component({
  selector: 'app-admin-managedownload',
  templateUrl: './admin-managedownload.component.html',
  styleUrls: ['./admin-managedownload.component.css']
})

export class AdminManagedownloadComponent implements OnInit {

  displayedColumns: string[] = ['name', 'size', 'completed', 'remain', 'btns'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }
}