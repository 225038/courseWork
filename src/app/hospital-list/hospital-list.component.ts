import { Component, OnInit } from '@angular/core';
import {Hospital, HospitalService} from '../hospital.service';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  illnessPeople: Array<any>;
  isDoctor: any;
  illness: string;
  comments: string;
  sendError: string;
  private currentLogin: string;
  constructor(private router: Router, private hospitalService: HospitalService, private userService: UserService) { }

  ngOnInit() {
    this.refreshList();
    this.userService.isDoctor(this.userService.currentUser().name).subscribe(data => {
      this.isDoctor = data;
    });
    this.currentLogin = this.userService.currentUser().name;
  }

  private refreshList() {
    this.hospitalService.getIllnessPeople().subscribe(data => {
      this.illnessPeople = data;
    });
  }

  private toHospital() {
    if (this.illness === '') {
      this.sendError = 'Не поставлен диагноз';
    } else {
      this.hospitalService.addNewHospital(new Hospital(this.currentLogin, this.illness, this.comments)).subscribe(err => {
        console.log('ПАМАГИТЕ', this.illness, '', this.comments);
        this.refreshList();
      });
    }
  }

  private deleteIllnessPeople() {
    this.hospitalService.deleteIllnessPerson(new Hospital(this.currentLogin, this.illness, this.comments)).subscribe(err => {
      console.log('ПАМАГИТЕ', this.currentLogin);
      this.refreshList();
    });
  }
}
