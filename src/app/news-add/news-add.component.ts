import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {News, NewsService} from "../news.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  name: string;
  content: string;
  nonRequest = true;
  isAdded: boolean;
  result: string;
  constructor(private router: Router, private newsService: NewsService, private userService: UserService) { }

  ngOnInit() {
  }
  add(){
    this.newsService.addNews(new News(this.name,this.content)).subscribe(e =>{
        this.nonRequest = false;
        if(e){
          this.name = '';
          this.content = '';
          this.result = 'Новость была добавлена';
          this.isAdded = true;
        }else{
          this.isAdded = false;
          this.result = 'Новость с таким названием уже существует';
        }
      }
    );
  }

}
