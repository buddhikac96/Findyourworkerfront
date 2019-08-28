import { SkillModel } from './../../models/skill.model';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@ Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private dataservice: DataService
  ) {
    this.dataservice.getAllJobs().subscribe(
      res => {
        console.log(res.recordset);
        this.jobs = res.recordset;
      }
    );
  }

  jobs: SkillModel[];
  jobType: string;
  date: string;
  time: string;
  baseLocation = 'Moratuwa';

  ngOnInit() {
  }

  printlocation(location) {
    console.log(location);
  }

  booknow() {
    console.log('booknow');
    console.log(this .jobType);
    console.log(this .date);
    console.log(this .time);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this .printlocation(location);
      });
    }
  }

}
