import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
export class News{
  name: string;
  description: string;
  constructor(name: string, description: string){
    this.name = name;
    this.description = description;
  }
}
@Injectable()
export class NewsService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get('http://localhost:8080/allNews');
  }
  addNews(news: News){
    return this.http.post('http://localhost:8080/addNews',news);
  }

}
