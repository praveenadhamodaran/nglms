import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Login } from '../login/login';
import { RegisterService } from "./register.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private regService:RegisterService , private router : Router) { }
registerForm: NgForm ;
users=[];
model=new Login;
// confirmPassword : any;

  ngOnInit() {
  }
createac(){
  alert(this.model);
 if(this.model.confirmPassword==this.model.userPassword){
      this.regService.createUser(this.model).subscribe((data: any[])=>{
      console.log(data);
      this.users = data;
      if(!this.users){
      alert("Invalid!!!");
      }
      else{
      this.router.navigateByUrl("home");
      }
  
    })
 }
else{
  alert("enter the same as in password")
}
}
}