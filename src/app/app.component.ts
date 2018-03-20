import { Component } from '@angular/core';
import {OrderInfoComponent} from "./order-info/order-info.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  netImage: any = 'h1.png';
}
