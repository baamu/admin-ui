import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';

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

  displayedColumns: string[] = ['name', 'user', 'added_date', 'downloaded_date','file_size','delete'];
  // dataSource = MatTableDataSource<DownloadHistory[]> = new MatTableDataSource();
  datasource : MatTableDataSource<DownloadHistory[]> = new MatTableDataSource();

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.getOnGoingDownloads().subscribe(Response =>{
      this.datasource.sort = this.sort;
    })
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  applyFilter(filtervalue:string) {
    this.datasource.filter = filtervalue.trim().toLowerCase();
    if (this.datasource.paginator){
      this.datasource.paginator.firstPage();
    }

  }

}
