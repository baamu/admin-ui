import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';

export interface Download {
  id: string;
  userId: number;
  url: number;
  fileName:string;
  downloadedSize: string;
  fileSize:string;
  completed:string;
}

@Component({
  selector: 'app-admin-managedownload',
  templateUrl: './admin-managedownload.component.html',
  styleUrls: ['./admin-managedownload.component.css']
})

export class AdminManagedownloadComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['fileName', 'downloadedSize', 'fileSize', 'completed', 'btns'];
  // dataSource = ELEMENT_DATA;
  dataSource : MatTableDataSource<Download> = new MatTableDataSource();

  constructor(private service : AppService) { }

  ngOnInit() {
    this.loadData();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadData() {
    this.service.getOnGoingDownloads().subscribe(response => {
      this.dataSource.data=response;
      console.log(response);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //start downloading
  startDownloading() {
    this.service.startDownloading().subscribe(response => {
      console.log("Started downloads!");
    })
  }

  //stop downloading
  stopDownloading() {
    this.service.stopDownloading().subscribe(response => {
      alert("Stopped downloading!");
    })
  }

  //pause download
  pauseDownload(download: Download) {
    this.service.pauseDownload(download).subscribe(response => {
      console.log("download paused!");
    })
  }

  //resume download
  resumeDownload(download: Download) {
    this.service.resumeDownload(download).subscribe(response => {
      console.log("download resumed!");
    })
  }

  //remove download
  removeDownload(download: Download) {
    this.service.removeDownload(download).subscribe(response => {
      console.log("download removed!");

      this.loadData();
    })
  }

}