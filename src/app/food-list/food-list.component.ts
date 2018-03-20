import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {BaseCooking, Dish, MenuService} from "../menu.service";
import {UserService} from "../user.service";

import {OrderInfoComponent} from "../order-info/order-info.component";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  isCooker: any;
  orderMsg: any;
  foods: Array<any>;
  constructor(private router: Router, private menuService: MenuService, private userService: UserService) { }

  ngOnInit() {
    this.refreshList();
    this.userService.isCooker(this.userService.currentUser().name).subscribe(data =>{
      this.isCooker = data;
    });
  }

  order(food: Dish){
    console.log('Всё топ');
    this.menuService.makeOrder(new BaseCooking(food.name,this.userService.currentUser().name)).subscribe(data => {
      console.log(data);
      this.orderMsg = data;
    });
  }
  refreshList(){
    this.menuService.getAllFood().subscribe(data => {
      this.foods = data;
    });
  }

}
