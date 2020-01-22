import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-repository',
  templateUrl: './admin-repository.component.html',
  styleUrls: ['./admin-repository.component.css']
})
export class AdminRepositoryComponent implements OnInit {

  displayedColumns: string[] = ['filename', 'filesize', 'delete'];

  constructor() { }

  ngOnInit() {
  }

}
