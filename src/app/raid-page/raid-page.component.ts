import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RaidRespond, RaidService} from "../raid.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-raid-page',
  templateUrl: './raid-page.component.html',
  styleUrls: ['./raid-page.component.css']
})
export class RaidPageComponent implements OnInit {

  raids: Array<any>;
  isTeacher: any;

  constructor(private router: Router, private raidService: RaidService, private userService: UserService) { }

  ngOnInit() {
    this.getAllRaids();
    this.userService.isTeacher(this.userService.currentUser().name).subscribe(data => {
      this.isTeacher = data;
    });
  }

  getAllRaids(){
    this.raidService.getAllRaids().subscribe(data => {
      this.raids = data;
    });
  }
  respond(r){
    this.raidService.respond(new RaidRespond(this.userService.currentUser().name, r.name)).subscribe(e =>{
      if (!e){
        window.alert('Вы уже зарегестрированы');
      }else {
        this.getAllRaids();
      }
    });
  }
}
