import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  filename: string;
  url:string;
  filesize: string;
}

/*const ELEMENT_DATA: PeriodicElement[] = [
  {filename: 'ABC', url: 'abc.com', filesize: '50MB'},
  {filename: 'ABC', url: 'abc.com', filesize: '50MB'},  
  {filename: 'ABC', url: 'abc.com', filesize: '50MB'}, 
  {filename: 'ABC', url: 'abc.com', filesize: '50MB'}, 
  {filename: 'ABC', url: 'abc.com', filesize: '50MB'}, 
];*/

@Component({
  selector: 'app-admin-repository',
  templateUrl: './admin-repository.component.html',
  styleUrls: ['./admin-repository.component.css']
})
export class AdminRepositoryComponent implements OnInit {

  displayedColumns: string[] = ['filename', 'url', 'filesize', 'delete'];
  //dataSource = ELEMENT_DATA;
  
  constructor(private service : AppService, private router: Router) { }

  ngOnInit() {
  }

  setRepo(repoName:string) {
    this.service.setRepoName(repoName);
    console.log(repoName);
    this.router.navigate(["/generatereport"]);
  }

}
