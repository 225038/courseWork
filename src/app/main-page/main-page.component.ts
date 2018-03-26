import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import {FacultyService} from "../faculty.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  gryffPoints: any;
  huffPoints: any;
  ravenPoints: any;
  slythPoints: any;

  constructor(private router: Router, private userService: UserService, private facultyService: FacultyService) { }

  ngOnInit() {
    this.facultyService.getGryffPoint().subscribe(data =>{
      this.gryffPoints = data;
    });
    this.facultyService.getHuffPoint().subscribe(data =>{
      this.huffPoints = data;
    });
    this.facultyService.getRavenPoint().subscribe(data =>{
      this.ravenPoints = data;
    });
    this.facultyService.getSluthPoint().subscribe(data =>{
      this.slythPoints = data;
    });
  }

  helloUser() {
    console.log(this.userService.currentUser().name, ' - this is current user');
  }
  logOut() {
    this.userService.logOut();
  }
}
