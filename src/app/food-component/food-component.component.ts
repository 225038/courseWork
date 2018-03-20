import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-food-component',
  templateUrl: './food-component.component.html',
  styleUrls: ['./food-component.component.scss']
})
export class FoodComponentComponent implements OnInit {

  isMenu = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
