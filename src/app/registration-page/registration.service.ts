import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class People {
  name: string;
  surname: string;
  password: string;
  email: string;
  login: string;
  facultyId: string;
  statusId: any;
  health: string;
  fatigue: string;
  constructor(login: string, password: string, name?: string, surname?: string, email?: string, facultyId?: string, statusId?: any){
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.login = login;
    this.facultyId = facultyId;
    this.statusId = statusId;
  }


  serFatigue(fatigue: string) {
    this.fatigue = fatigue;
  }

  setHealth(health: string) {
    this.health = health;
  }
}

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable <any> {
    return this.http.get('http://localhost:8080/allPeople');
  }
  registerNewUser(people: People): Observable<any> {
    return this.http.post('http://localhost:8080/registerPerson', people, {observe: 'response'});
  }
}
