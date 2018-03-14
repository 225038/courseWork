import { Component, OnInit } from '@angular/core';
import {AuthPageService} from "./auth-page.service";
import {People} from "../registration-page/registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  userLogin: '';
  userPassword: '';
  error: string;
  lastResponse: string;

  constructor(private authPageService: AuthPageService, private router: Router) { }

  ngOnInit() {
  }

  auth(){
    if (this.userLogin === ''){
      this.lastResponse = 'Поле логин не должно быть пустым';
      return;
    }
    if (this.userPassword === ''){
      this.lastResponse = 'Поле пароль не должно быть пустым';
      return;
    }
    this.authPageService.authUser(new People(this.userLogin, this.userPassword,'-1','-1','-1')).subscribe( response => {
      this.lastResponse = response.body.toString();
      if (this.lastResponse === 'NOT_FOUND') {
        this.error = 'Пользователя с данным логином не существует';
      }
      if (this.lastResponse === 'EXPECTATION_FAILED'){
        this.error = 'Логин и пароль не совпадают';
      }
      if(this.lastResponse === 'FOUND') {
        this.error = 'Авторизация прошла успешно';
        // this.router.navigate(['/regInfo']);
      }
      console.log(this.lastResponse);
      this.lastResponse = '';
      this.userLogin = '';
      this.userPassword = '';
    });
  }

}