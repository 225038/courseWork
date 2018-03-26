import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FacultyService {

  constructor(private http: HttpClient) { }

  getGryffPoint(){
    return this.http.get('http://localhost:8080/getGryfPoints');
  }
  getHuffPoint(){
    return this.http.get('http://localhost:8080/getHuffPoints');
  }
  getRavenPoint(){
    return this.http.get('http://localhost:8080/getRavenPoints');
  }
  getSluthPoint(){
    return this.http.get('http://localhost:8080/getSlythPoints');
  }
}
