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
    return this.http.post('http://localhost:8080/getPeopleByLogin',login);
  }

  isAdmin(login: string){
    return this.http.post('http://localhost:8080/isAdmin',login);
  }
  isTeacher(login: string){
    return this.http.post('http://localhost:8080/isTeacher',login);
  }
  isCooker(login: string){
    return this.http.post('http://localhost:8080/isCooker',login);
  }
  isDoctor(login: string){
    return this.http.post('http://localhost:8080/isDoctor',login);
  }
}
