import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Observable } from 'rxjs';

let request_headers = new HttpHeaders(
  {
  'Content-Type' : 'application/json'
  }
);

const BASE_URL = "http://3.81.95.4:8080";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  setRepoName(repoName: string) {
    throw new Error("Method not implemented.");
  }

  constructor(private http : HttpClient, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  login(email:string, password:string) {
    
    var user = {
      "email" : email,
      "password" : password
    }
    
    return this.http.post(BASE_URL+'/login', user, {headers:request_headers, observe:"response"})
    .pipe(
      map(respose => {
         if(respose.ok) {
           request_headers = request_headers.append("Authorization", respose.headers.get("Authorization"))

           this.storage.set("token", respose.headers.get("Authorization"))

           console.log(this.storage.get('token'))
         } 
         return respose.body
      })
    );

  }

  
  getOnGoingDownloads() : Observable<any> {
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }
    
    return this.http.get<Array<any>>(BASE_URL+'/api/admin/download/get-all',{headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body;})
    );

  }

  getDownloadHistory() : Observable<any> {
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }

    return this.http.get<Array<any>>(BASE_URL+'/api/admin/download/history',{headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body;})
    );
  }

  removeDownload(id:number){
    if(!this.storage.get("token")) {
      console.log("no auth header is set")
      return null;
    } else {
      console.log("Token " + this.storage.get('token'));
    }
    var payload = {
      "id" : id
    }

    return this.http.get(BASE_URL+'/api/admin/download/remove',  {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"})
    .pipe(
      map(response => {return response.body})
    )

  }


  logout():void {
    this.http.get(BASE_URL+'/logout',  {headers:request_headers.append("Authorization",this.storage.get("token")), observe:"response"});
    
    this.storage.remove("token");
  }

  isLogged():boolean {
    if(!this.storage.get("token")) {
      return false;
    } else {
      return true;
    } 
  }


}
