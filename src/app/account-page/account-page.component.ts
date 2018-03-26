import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

  isStudent: any;
  login: string;
  userPoints: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.login = this.userService.currentUser().name;
    this.userService.getPeoplepoints(this.userService.currentUser().name).subscribe(data =>
    {
      this.userPoints = data;
    });
    this.userService.isStudent(this.userService.currentUser().name).subscribe(data =>{
      this.isStudent = data;
    });
  }
  logOut() {
    this.userService.logOut();
    this.router.navigate(['/auth']);
  }

}
