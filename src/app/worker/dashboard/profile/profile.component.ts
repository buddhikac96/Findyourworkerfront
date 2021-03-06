import { Subscription } from 'rxjs';
import { UserService } from './../../../shared/services/user.service';
import { SkillModel } from './../../../shared/models/skill.model';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { WorkerProfile, WorkerSkill } from './../../../shared/models/user.model';
import { DataService } from './../../../shared/services/data.service';
import { WorkerService } from './../../../shared/services/worker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  workerProfile: WorkerProfile = new WorkerProfile();
  workerSkills: WorkerSkill[] = [];
  userEmail: string;
  sysSkills: SkillModel[] = [];
  addSkillForm;
  jobType: string;
  jobIdPassToBooking: number;
  locations: string[];
  editProfileForm;

  private getProfileSubscription: Subscription;
  private getAllJobsSubscription: Subscription;
  private getAllLocationsSubscription: Subscription;
  private addWorkerSkillSubscription: Subscription;
  private editWorkerProfileSubscription: Subscription;

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

    this.editProfileForm = this.fb.group({
      firstName: [this.workerProfile.FirstName],
      lastName: [this.workerProfile.LastName],
      phoneNumber: [this.workerProfile.ContactNumber],
      location: [this.workerProfile.BaseLocation]
    });


  }

  ngOnInit() {
    const userId = localStorage.getItem('UserId');
    this. userEmail = localStorage.getItem('sessionEmail');
    this.getProfileSubscription = this.workerService.getProfile(userId).subscribe(
      res => {
        console.log(res.result);
        this.workerProfile = res.result.recordsets[0][0];
        this.workerSkills = res.result.recordsets[1];
      }
    );

    this.getAllJobsSubscription = this.dataService.getAllJobs().subscribe(
      res => {
        console.log(res);
        this.sysSkills = res.recordset;
      }
    );

    this.getAllLocationsSubscription = this.dataService.getAllLocations().subscribe(
      res => {
        console.log(res);
        this.locations = res.recordset;
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

    this.addWorkerSkillSubscription = this.workerService.addWorkerSkill(id, skill).subscribe(
      res => {
        console.log(res);
        this.workerSkills.push(newSkill);
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

  onSubmitEditProfile() {
    const userId = this.userService.getUserId();
    const profileData = {
      firstName: this.editProfileForm.value.firstName,
      lastName: this.editProfileForm.value.lastName,
      phoneNumber: this.editProfileForm.value.phoneNumber,
      location: this.editProfileForm.value.location
    };
    this.editWorkerProfileSubscription = this.workerService.editWorkerProfile(userId, profileData).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      }
    );
  }

  ngOnDestroy() {
    if (this.addWorkerSkillSubscription) {
      this.addWorkerSkillSubscription.unsubscribe();
    }
    if (this.editWorkerProfileSubscription) {
      this.editWorkerProfileSubscription.unsubscribe();
    }
    if (this.getAllLocationsSubscription) {
      this.getAllLocationsSubscription.unsubscribe();
    }
    if (this.getProfileSubscription) {
      this.getProfileSubscription.unsubscribe();
    }
  }
}
