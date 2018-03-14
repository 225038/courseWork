import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-answer',
  templateUrl: './registration-answer.component.html',
  styleUrls: ['./registration-answer.component.css']
})
export class RegistrationAnswerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
