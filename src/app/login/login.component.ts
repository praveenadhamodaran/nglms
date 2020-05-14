import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

import { Login } from './login';
import {Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

model=new Login();
users =[];

  constructor(private loginserv:LoginService, private router:Router) { }

  ngOnInit() {
  }
  enter(){
  alert(JSON.stringify(this.model));
  this.loginserv.loginUser(this.model).subscribe((data: any[])=>{
      console.log("login details"+data);
      this.users = data;
      if(!this.users){
      alert("Invalid!!!");
      this.router.navigateByUrl("invalid");
      }
      else{
 this.router.navigateByUrl("login");
      }
      
    })  
}

register(){
  this.router.navigateByUrl("reg");

}
 

}