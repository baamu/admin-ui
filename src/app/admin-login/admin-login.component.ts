import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private appService: AppService, private _router: Router) {
    
  }
  
  formSubmit(){
  
    var email:string = this.form.get('email').value;
    var password:string = this.form.get('password').value;

    this.appService.login(email, password)
      .subscribe(response => {
          console.log(response)
          this._router.navigate(["/managedownload"]);
        },
        error => {
          console.log("error ", error);
          alert("Login Failed!")
          this.form.reset();
        }
      );

      // this._router.navigate(["/repository"]);

  }

  ngOnInit() {

    this.form = this.fb.group({
      email: [''],
      password: ['']
    })
  }

}

