import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Dish, MenuService} from "../menu.service";

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  name: string;
  description: string;
  time: string;
  constructor(private routes: Router, private menuService: MenuService) { }

  ngOnInit() {
  }

  add(){
    this.menuService.addDish(new Dish(this.name,this.description,this.time)).subscribe(e =>{
      console.log(e);
      }
    );
  }

}
