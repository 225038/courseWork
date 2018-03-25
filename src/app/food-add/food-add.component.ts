import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Dish, MenuService} from "../menu.service";

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  nonRequest = true;
  isAdded: boolean;
  result: string;
  name: string;
  description: string;
  time: string;
  constructor(private routes: Router, private menuService: MenuService) { }

  ngOnInit() {
  }

  add(){
    this.menuService.addDish(new Dish(this.name,this.description,this.time)).subscribe(e =>{
      this.nonRequest = false;
      if(e == 'OK'){
        this.name = '';
        this.description = '';
        this.time = '';
        this.result = 'Блюдо было добавлено';
        this.isAdded = true;
      }else{
        this.isAdded = false;
        this.result = 'Блюдо с таким названием уже имеется в ассортименте';
      }


      }
    );
  }

}
