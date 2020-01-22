import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin-adduser',
  templateUrl: './admin-adduser.component.html',
  styleUrls: ['./admin-adduser.component.css']
})
export class AdminAdduserComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private appService: AppService) { }

  formSubmit(){
  
    var email:string =this.form.get('email').value;
    var username:string = this.form.get('username').value;
    var name:string = this.form.get('name').value;
    var dob:string = this.form.get('dob').value.replace(/-/g,"/");
    var nic:string = this.form.get('nic').value;
    var password:string = this.form.get('password').value;
    

    var repass:string = this.form.get('repass').value;

    this.appService.register(email,name,username,nic,dob,password)
      .subscribe(response => {
          console.log(response)
          alert("Verification Email Sent! Verify account and login!")
        },

        error => {
          console.log("error ", error)
          alert("Registration Failed!")
          
        }
      );

      this.form.reset();

  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      nic: ['', Validators.required],
      password: [''],
      repass:['']
    })
  }

}
