import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  login: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.login = this.userService.currentUser().name;
  }
  logOut(){
    this.userService.logOut();
    this.router.navigate(['/auth']);
  }

}
