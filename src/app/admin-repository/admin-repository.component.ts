import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DownloadHistory } from '../admin-history/admin-history.component';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-repository',
  templateUrl: './admin-repository.component.html',
  styleUrls: ['./admin-repository.component.css']
})
export class AdminRepositoryComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = ['name', 'url', 'file_size', 'delete'];
  dataSource : MatTableDataSource<DownloadHistory> = new MatTableDataSource();
  
  constructor(private service : AppService, private router: Router) { }

  ngOnInit() {
    this.feedData();

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  feedData() {
    this.service.getRepo().subscribe(response => {
      // console.log(response);
      this.dataSource.data = response;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id) {
    this.service.removeFile(id).subscribe(response => {
      console.log("item removed", response);
      alert("Successfully Deleted!")
      this.feedData();
    })
  }

}
