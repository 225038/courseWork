import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-food-managment',
  templateUrl: './food-managment.component.html',
  styleUrls: ['./food-managment.component.css']
})
export class FoodManagmentComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

}
