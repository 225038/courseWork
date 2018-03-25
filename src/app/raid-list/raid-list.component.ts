import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RaidRespond, RaidService} from "../raid.service";

@Component({
  selector: 'app-raid-list',
  templateUrl: './raid-list.component.html',
  styleUrls: ['./raid-list.component.css']
})
export class RaidListComponent implements OnInit {

  editableNumber = -1;
  raids: Array<any>;
  raidResponds: Array<any>;
  constructor(private router: Router, private raidService: RaidService) { }

  ngOnInit() {
    this.refreshList();
  }

  refreshList(){
    this.raidService.getAllRaids().subscribe(data =>{
      this.raids = data;
    });
    this.raidService.getAllRaidResponse().subscribe(data =>{
      console.log(data);
      this.raidResponds = data;
    } );
  }
  setPoints(d){
    this.raidService.addPoints(new RaidRespond(d.userName,d.raidName)).subscribe(
      e => {console.log(e);}
    );
  }
  close(r){
    this.raidService.close(r.name).subscribe(e => {console.log(e);
      this.refreshList();});
  }


}
