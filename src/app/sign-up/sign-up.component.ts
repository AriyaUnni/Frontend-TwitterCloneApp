import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  name=""
  dob=""
  phoneNo=""
  place=""
  email=""
  password=""
  confirmPassword=""

  readValues=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phoneNo":this.phoneNo,
      "place":this.place,
      "email":this.email,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }

    console.log(data)
  }

  ngOnInit(): void {
  }

}
