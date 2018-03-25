import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
export class RaidRespond {
  userName: string;
  raidName: string;

  constructor(userName: string, raidName: string) {
    this.userName = userName;
    this.raidName = raidName;
  }

  getUserName(): string {
    return this.userName;
  }

  setuserName(value: string) {
    this.userName = value;
  }

  getraidName(): string {
    return this.raidName;
  }

  setraidName(value: string) {
    this.raidName = value;
  }
}

export class Raid {

  name: string;
  description: string;
  numberOfRequiredStudents: number;
  numberOfCurrentStudents: number;
  isActive: boolean;
  points: number;

  constructor(name: string, description: string,numberOfRequiredStudents: number, points: number) {
    this.numberOfRequiredStudents = numberOfRequiredStudents;
    this.name = name;
    this.description = description;
    this.isActive = true;
    this.points = points;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  setNumberOfCurrentStudents(value: number) {
    this.numberOfCurrentStudents = value;
  }
}
@Injectable()
export class RaidService {

  constructor(private http: HttpClient) { }

  getAllRaids(): Observable<any> {
    return this.http.get('http://localhost:8080/allRaids');
  }
  addRaid(raid: Raid){
    return this.http.post('http://localhost:8080/addNewRaid', raid);
  }
  getPersonalRaids(login: string): Observable<any> {
    return this.http.post('http://localhost:8080/getAllRaidsByName', login);
  }
  getAllRaidResponse(): Observable<any>{
    return this.http.get('http://localhost:8080/getAllRaidResponse');
  }
  respond(r: RaidRespond){
    return this.http.post('http://localhost:8080/saveRaidRespond',r);
  }
  addPoints(r: RaidRespond){
    return this.http.post('http://localhost:8080/addPoints',r);
  }
  close(r: string){
    return this.http.post('http://localhost:8080/setRaidUnactive',r);
  }

}
