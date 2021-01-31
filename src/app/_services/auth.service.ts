import { HttpClient } from '@angular/common/http';
import { Person } from './../_model/person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = "https://mearn-stack-backend-test.herokuapp.com/"
  constructor(private httpClient:HttpClient) { }
  login(person:Person){
    return this.httpClient.post(`${this.baseUrl}user/login`, person)
  }
  register(person:Person){
   return this.httpClient.post(`${this.baseUrl}user/register`,person)
  }
  isAuthenticated(){
    const token = localStorage.getItem("token")
    if(token){
      return true
    }else{
      return false
    }
  }
}
