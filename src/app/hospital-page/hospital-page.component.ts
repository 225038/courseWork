import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-hospital-page',
  templateUrl: './hospital-page.component.html',
  styleUrls: ['./hospital-page.component.css']
})
export class HospitalPageComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  health: any;

  ngOnInit() {
    this.userService.getPeopleHealth(this.userService.currentUser().name).subscribe(data =>{
      this.health = data;
    });
  }

}
