import { Component, OnInit } from '@angular/core';
import {HospitalService} from '../hospital.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hospital-manage',
  templateUrl: './hospital-manage.component.html',
  styleUrls: ['./hospital-manage.component.css']
})
export class HospitalManageComponent implements OnInit {

  illnesses: Array<any>;
  isDoctor: any;
  illness: string;
  comments: string;
  constructor(private router: Router, private hospitalService: HospitalService, private userService: UserService) { }

  ngOnInit() {
    this.refreshList();
    this.userService.isDoctor(this.userService.currentUser().name).subscribe(data => {
      this.isDoctor = data;
    });
  }

  private refreshList() {
    this.hospitalService.getHospital().subscribe(data => {
      this.illnesses = data;
    });
  }
}
