import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {Raid, RaidService} from "../raid.service";

@Component({
  selector: 'app-raid-add',
  templateUrl: './raid-add.component.html',
  styleUrls: ['./raid-add.component.css']
})
export class RaidAddComponent implements OnInit {
  nonRequest = true;
  isAdded: boolean;
  result: string;
  name: string;
  description: string;
  fatigue: string;
  number: string;
  minHealth: string;
  maxHealth: string;
  points: string;

  constructor(private routes: Router, private userService: UserService, private raidService: RaidService) { }

  ngOnInit() {
  }
  add(){
    this.raidService.addRaid(new Raid(this.name,this.description, +this.number,+this.points)).subscribe(e =>{
        this.nonRequest = false;
        if(e){
          this.name = '';
          this.description = '';
          this.fatigue = '';
          this.number = '';
          this.maxHealth = '';
          this.minHealth = '';
          this.result = 'Задание было добавлено';
          this.isAdded = true;
        }else{
          this.isAdded = false;
          this.result = 'Задание с таким названием уже существует';
        }


      }
    );
  }

}
