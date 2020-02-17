import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface DownloadHistory {
  id:number;
  name:string;
  url:string;
  addedDate:string;
  downloadedDate:string;
  file_size:number;
  user:string;
}

@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.component.html',
  styleUrls: ['./admin-history.component.css']
})
export class AdminHistoryComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  form: FormGroup;

  displayedColumns: string[] = ['name', 'user', 'added_date', 'downloaded_date','file_size','delete'];
  // dataSource = MatTableDataSource<DownloadHistory[]> = new MatTableDataSource();
  datasource : MatTableDataSource<DownloadHistory> = new MatTableDataSource();

  constructor(public fb: FormBuilder, private service: AppService) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      user: ['']
    })
    
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  formSubmit(){
  
    var user:string = this.form.get('user').value;

    this.loadUserData(user);

  }

  loadUserData(id) {
    this.service.getUserDownloads(id).subscribe(response =>{
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
