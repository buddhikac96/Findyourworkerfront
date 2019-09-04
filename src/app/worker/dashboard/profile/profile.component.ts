import { UserService } from './../../../shared/services/user.service';
import { SkillModel } from './../../../shared/models/skill.model';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { WorkerProfile, WorkerSkill } from './../../../shared/models/user.model';
import { DataService } from './../../../shared/services/data.service';
import { WorkerService } from './../../../shared/services/worker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  workerProfile: WorkerProfile = new WorkerProfile();
  workerSkills: WorkerSkill[] = [];
  userEmail: string;
  sysSkills: SkillModel[] = [];
  addSkillForm;
  jobType: string;
  jobIdPassToBooking: number;
  setLocationToEdit: string;
  locations: string[];

  constructor(
    private workerService: WorkerService,
    private dataService: DataService,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.addSkillForm = this.fb.group({
      skill: [''],
      desc: [''],
      rate: ['']
    });
  }

  ngOnInit() {
    const userId = localStorage.getItem('UserId');
    this. userEmail = localStorage.getItem('sessionEmail');
    this.workerService.getProfile(userId).subscribe(
      res => {
        console.log(res.result);
        this.workerProfile = res.result.recordsets[0][0];
        this.workerSkills = res.result.recordsets[1];
      }
    );

    this.dataService.getAllJobs().subscribe(
      res => {
        console.log(res);
        this.sysSkills = res.recordset;
      }
    );

  }

  onAddSkill() {
    const id = this.userService.getUserId();
    const skill = [{
      skillId : this.jobIdPassToBooking,
      description: this.addSkillForm.value.desc,
      hrate: this.addSkillForm.value.rate
    }];

    const newSkill = {
      Description: this.addSkillForm.desc,
      HourlyCharge: this.addSkillForm.rate,
      SkillTitle: this.jobType,
      SkillId: this.jobIdPassToBooking
    };

    this.workerService.addWorkerSkill(id, skill).subscribe(
      res => {
        console.log(res);
        this.workerSkills.push(res.newSkill);
      }
    );
  }

  setjobIdPassToBooking() {
    for (const skill of this.sysSkills) {
      if (skill.SkillTitle === this.jobType) {
        this.jobIdPassToBooking = skill.SkillId;
      }
    }
    console.log(this.jobIdPassToBooking);
  }

}
