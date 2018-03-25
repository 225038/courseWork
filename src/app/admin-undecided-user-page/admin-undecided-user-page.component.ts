 import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from "../admin-service.service";
import {Router} from "@angular/router";
import {People} from "../registration-page/registration.service";

@Component({
  selector: 'app-admin-undecided-user-page',
  templateUrl: './admin-undecided-user-page.component.html',
  styleUrls: ['./admin-undecided-user-page.component.css']
})
export class AdminUndecidedUserPageComponent implements OnInit {

  status: string;
  faculty: string;
  people: Array<any>;
  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit() {
    this.refreshList();
  }

  print(p: People, index) {
    this.adminService.approoveUser(p);
    this.refreshList();

  }

  refreshList(){
    this.adminService.getAllUndecidedUsers().subscribe(data => {
        this.people = data;
      },
      error => console.error(error));
  }

  approve(p: People) {
    console.log('approve method');
    this.adminService.approoveUser(new People(p.login,p.password,p.name,p.surname,p.email,'Hufflepuff',1)).subscribe( err =>{
      console.log(err);
      this.refreshList();
    });
  }

}
