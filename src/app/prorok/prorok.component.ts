import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-prorok',
  templateUrl: './prorok.component.html',
  styleUrls: ['./prorok.component.css']
})
export class ProrokComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
