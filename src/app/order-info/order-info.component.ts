import {Component, OnInit, ViewEncapsulation, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {Cooking, MenuService} from "../menu.service";
import {UserService} from "../user.service";



@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OrderInfoComponent implements OnInit {

  cookings: Array<any>;
  noCooking: boolean;
  constructor(private router: Router, private menuService: MenuService,private userService: UserService) { }

  ngOnInit() {
    this.menuService.getAllCookings(this.userService.currentUser().name).subscribe(data =>{
      this.cookings = data;
      if(this.cookings.length == 0){
        this.noCooking = true;
      }
    });
  }
  setGiven(c: Cooking){
    c.given = true;
    this.menuService.setCookingReady(c).subscribe(e => {console.log(e);});
  }
  setReady(c: Cooking){
    c.ready = true;
    this.menuService.setCookingGiven(c).subscribe(e => {console.log(e);});
  }



}
