import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = "https://learningapppraveena.herokuapp.com/api/user/";

  constructor(private httpClient: HttpClient) { }
 

 public  createUser(user) {
    return this.httpClient.post(this.url, user,{
   headers: new HttpHeaders({
     'Content-Type':'application/json'
   })
     
})
  }


 
}