import { Component, OnInit } from '@angular/core';

import { WorkerProfile, WorkerSkill } from '../../../shared/models/user.model';
import { WorkerService } from './../../../shared/services/worker.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: WorkerProfile;
  workerSkill: WorkerSkill;
  userEmail;

  constructor(
    private workerService: WorkerService
  ) {  }

  ngOnInit() {
    const userId = localStorage.getItem('UserId');
    this. userEmail = localStorage.getItem('sessionEmail');
    this.workerService.getProfile(userId).subscribe(
      res => {
        console.log(res.result.recordsets[0][0]);
        this.user = res.result.recordsets[0][0];
      }
    );
  }

}
