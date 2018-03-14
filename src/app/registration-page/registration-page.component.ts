import { Component, OnInit } from '@angular/core';
import {People, RegistrationService} from "./registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  userName: '';
  userSurname: '';
  userLogin: '';
  userPassword: '';
  userEmail: '';
  registrationError: string;
  lastResponse: string;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.userName === '') {
      this.registrationError = 'Отсутствует имя пользователя';
      return;
    }
    if (this.userPassword === '') {
      this.registrationError = 'Отсутствует пароль';
      return;
    }
    if (this.userSurname === '') {
      this.registrationError = 'Отсутствует фамилия';
      return;
    }
    if (this.userLogin === '') {
      this.registrationError = 'Отсутствует логин';
      return;
    }
    if (this.userEmail === '') {
      this.registrationError = 'Отсутствует почта';
      return;
    }

    this.registrationService.registerNewUser(new People(this.userLogin, this.userPassword, this.userName, this.userSurname, this.userEmail)).subscribe( response => {
      this.lastResponse = response.body.toString();
      if (this.lastResponse === 'CONFLICT') {
        this.registrationError = 'Данный логин уже занят';
        return;
      }
      if (this.lastResponse === 'BAD_REQUEST'){
        this.registrationError = 'Неправльная почта';
        return;
      }
      if (this.lastResponse === 'BAD_REQUEST') {
        this.registrationError = 'Данная почта не валидна';
        return;
      }
      if (this.lastResponse === 'OK') {
        this.registrationError = 'Пользователь успешно зарегестрирован';
      }

      console.log(this.lastResponse);
      this.lastResponse = '';
      this.userLogin = '';
      this.userEmail= '';
      this.userName = '';
      this.userSurname = '';
      this.userPassword = '';
      this.router.navigate(['/regInfo']);
    });

  }

}
