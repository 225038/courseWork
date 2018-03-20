import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(login: string){
    localStorage.setItem('currentUser',JSON.stringify({token:"jwt will come later",name: login}));
  }
  currentUser(){
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  logOut(){
    return localStorage.removeItem('currentUser');
  }
  getPersonStatusIdByLogin(login: string){
    return this.http.post('http://localhost:8080/getStatusByLogin',login);
  }
  getPeopleByLogin(login: string){
    return this.http.post('',login);
  }
}
