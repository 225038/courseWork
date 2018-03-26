import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {People} from './registration-page/registration.service';

export class Hospital {
  private person: string;
  // private name: string;
  private illness: string;
  private comments: string;

  constructor(person: string, illness: string, comments: string) {
    this.person = person;
    this.illness = illness;
    this.comments = comments;
  }

  getIllness(): string {
    return this.illness;
  }

  setId(value: string) {
    this.person = value;
  }

  getId(): string {
    return this.person;
  }

  setIllness(value: string) {
    this.illness = value;
  }

  getComment(): string {
    return this.comments;
  }

  setComment(value: string) {
    this.comments = value;
  }
}

export class IllnessPeople {
  private login: string;
  private complaint: string;

  constructor(login: string, complaint: string) {
    this.login = login;
    this.complaint = complaint;
  }
  getComplaint(): string {
    return this.complaint;
  }

  setLogin(value: string) {
    this.login = value;
  }

  getLogin(): string {
    return this.login;
  }

  setComplaint(value: string) {
    this.complaint = value;
  }
}

@Injectable()
export class HospitalService {

  constructor(private http: HttpClient) { }

  getHospital(): Observable<any> {
    return this.http.get('http://localhost:8080/getHospital');
  }

  getIllnessPeople(): Observable<any> {
    return this.http.get('http://localhost:8080/getIllnessPeople');
  }
  deleteHospital(hospital: Hospital) {
    return this.http.post('http://localhost:8080/deleteHospital', hospital);
  }
  addNewHospital(hospital: Hospital) {
    return this.http.post('http://localhost:8080/addNewHospital', hospital);
  }

  addNewIllnessPeople(illnessPeople: IllnessPeople) {
    return this.http.post('http://localhost:8080/addNewIllnessPeople', illnessPeople);
  }

  deleteIllnessPerson(illnessPeople: Hospital) {
    return this.http.post('http://localhost:8080/deleteIllnessPeople', illnessPeople);
  }
}
