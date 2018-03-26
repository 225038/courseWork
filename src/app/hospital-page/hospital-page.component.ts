import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HospitalService, IllnessPeople} from '../hospital.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-hospital-page',
  templateUrl: './hospital-page.component.html',
  styleUrls: ['./hospital-page.component.css']
})
export class HospitalPageComponent implements OnInit {
  illnesses: Array<any>;
  isDoctor: any;
  complaint: string;
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

  toIllness() {
    this.hospitalService.addNewIllnessPeople(new IllnessPeople(this.userService.currentUser().name.toString(), this.complaint)).subscribe(err => {
      console.log('ПАМАГИТЕ', this.userService.currentUser().name, '', this.complaint);
      this.refreshList();
    });
    // this.complaint = 'Жалоба';
    }
}
