import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { AppService } from '../app.service';

export interface DownloadHistory {
  url:string;
  added_date:string;
  downloaded_date:string;
  file_size:string;
}


@Component({
  selector: 'app-admin-history',
  templateUrl: './admin-history.component.html',
  styleUrls: ['./admin-history.component.css']
})
export class AdminHistoryComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource : MatTableDataSource<DownloadHistory[]> = new MatTableDataSource();
  displayedColumns: string[] = ['name', 'url', 'added_date', 'downloaded_date','file_size','delete'];
  selection: any;
  

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  constructor(private service : AppService) {

   }

  ngOnInit() {
    this.service.getOnGoingDownloads().subscribe(response => {
      this.dataSource.data=response;
  })

  this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}



}

