import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface User {
  username:string,
  email:string,
  name:string,
  nic:string,
  dob:string
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, public fb: FormBuilder) {
    // console.log(data.d)
   }

  ngOnInit() {
    // this.form = this.fb.group({})
  }

  updateUser() {
    alert("here")
    alert(this.form.get("email"))
    console.log("Email :", this.form.get("email"))
    console.log("Name :", this.form.get("name"))
    console.log("Dob :", this.form.get("dob"))
    console.log("NIC :", this.form.get("nic"))
  }

}
