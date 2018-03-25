import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../news.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-prorok',
  templateUrl: './prorok.component.html',
  styleUrls: ['./prorok.component.css']
})
export class ProrokComponent implements OnInit {

  isAdmin: any;
  news: Array<any>;
  constructor(private userService: UserService,private router: Router, private newsService: NewsService) { }

  ngOnInit() {
    this.refreshList();
    this.userService.isAdmin(this.userService.currentUser().name).subscribe(data =>{
      this.isAdmin = data;
    })
  }

  refreshList(){
    this.newsService.findAll().subscribe(data =>{
      this.news = data;
    });
  }
}
