import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  dob=""
  phoneNo=""
  place=""
  email=""
  password=""
  

  readValues=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phoneNo":this.phoneNo,
      "place":this.place,
      "email":this.email,
      "password":this.password,
      
    }

    console.log(data)
    alert("Successfully added")
    this.myapi.signupData(data).subscribe(
      (res)=>{
        alert("successfully added")
      }
    )

    this.name=""
    this.dob=""
    this.phoneNo=""
    this.place=""
    this.email=""
    this.password=""
  }

  ngOnInit(): void {
  }

}
