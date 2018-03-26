import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {People} from '../registration-page/registration.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthPageService {

  constructor(private http: HttpClient) { }

  authUser(people: People): Observable <any> {
    return this.http.post('http://localhost:8080/authUser', people, {observe: 'response'});
  }
}
