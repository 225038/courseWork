import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {People} from "./registration-page/registration.service";

@Injectable()
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getAllUndecidedUsers(): Observable <any> {
    return this.http.get('http://localhost:8080/undecidedUsers');
  }

  approoveUser(people: People): Observable <any> {
    return this.http.post('http://localhost:8080/approveUser',people);
  }

}
