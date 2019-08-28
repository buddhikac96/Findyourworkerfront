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
  jobIdPassToBooking: number;
  date: string;
  time: string;
  baseLocation = 'moratuwa';

  ngOnInit() {
  }

  setjobIdPassToBooking() {
    for (const skill of this.jobs) {
      if (skill.SkillTitle === this.jobType) {
        this.jobIdPassToBooking = skill.SkillId;
      }
    }
    console.log(this.jobIdPassToBooking);
  }

}
