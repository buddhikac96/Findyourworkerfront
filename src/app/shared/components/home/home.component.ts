import { Subscription } from 'rxjs';
import { SkillModel } from './../../models/skill.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';

@ Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  jobs: SkillModel[];
  jobType: string;
  jobIdPassToBooking: number;
  date: string;
  time: string;
  baseLocation = 'moratuwa';
  latitude = 6.9061;
  longitute = 79.9696;
  clientLat;
  clientLng;

  private getAllJobsSubscription: Subscription;



  constructor(
    private dataservice: DataService
  ) {
    this.getAllJobsSubscription = this.dataservice.getAllJobs().subscribe(
      res => {
        console.log(res.recordset);
        this.jobs = res.recordset;
      }
    );
  }

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

  mapClick(event) {
    const coords = event.coords;
    const location = '' + coords.lat + ',' + coords.lng;
    this.clientLat = coords.lat;
    this.clientLng = coords.lng;
    localStorage.setItem('location', location);
  }

  ngOnDestroy() {
    this.getAllJobsSubscription.unsubscribe();
  }

}
