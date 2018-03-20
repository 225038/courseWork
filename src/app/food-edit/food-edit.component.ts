import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Dish, MenuService} from "../menu.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {

  foods: Array<any>;
  editableNumber = -1;
  description: string;
  time: string;

  constructor(private router: Router, private menuService: MenuService, private userService: UserService) { }

  ngOnInit() {
    this.refreshList();
  }

  delete(food: Dish,i){
    this.menuService.deleteDish(food).subscribe(e =>{
      if(this.editableNumber !== -1 && this.editableNumber > i ){
        this.editableNumber= this.editableNumber-1;
      }
      this.refreshList();});

  }
  refreshList(){
    this.menuService.getAllFood().subscribe(data => {
      this.foods = data;
    });
  }
  edit(i,f: Dish){
    this.editableNumber = i;
    this.description = f.description;
    this.time = f.cookingTime;
    console.log(i);
  }
  approve(f: Dish){
    this.editableNumber = -1;
    this.menuService.editDish(new Dish(f.name,this.description,this.time)).subscribe(data => {
      console.log(this.description,' ',this.time)
      this.refreshList();
    });
  }
}
