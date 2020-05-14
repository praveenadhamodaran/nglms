import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { Router } from '@angular/router'
import { NewUserService } from './newuser.service';
// import { HomeComponent } from '../home/NewUserService.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

model = new Login();
users =[];
userId:number;
user:string;
 constructor(private newUserService:NewUserService , private router : Router) { }

  ngOnInit() {
    this.getUserResources();
  }
getUserResources(){
 this.user =(sessionStorage.getItem('user')) ;
console.log("ahvhev"+this.user);
//this.userId=this.user.userId;

  this.newUserService.getUser(this.user).subscribe((data: any[])=>{
      console.log(data);
      this.users.push(data);
     
    })  
}
getRes(){
 this.router.navigateByUrl("home/resources"); 
}
sample(){
   this.router.navigateByUrl("sample"); 
}
}