import { DataService } from './../../../shared/services/data.service';
import { UserService } from './../../../shared/services/user.service';
import { WorkerService } from './../../../shared/services/worker.service';
import { Component, OnInit } from '@angular/core';
import { RequestCard } from '../../../shared/models/request.model';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  myRequets: any[];
  request: RequestCard = new RequestCard();
  skills: any[] = [];

  constructor(
    private worrkerService: WorkerService,
    private userService: UserService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    const userId = this.userService.getUserId();
    // get all requests by workerId
    this.worrkerService.getAllRequests(userId).subscribe(
      res => {
        this.myRequets = res.result[1];
      }
    );
    // get all jobtypes
    this.dataService.getAllJobs().subscribe(
      res => {
        this.skills = res.recordset;
      }
    );
  }

  // fetch data to view request
  viewReq(reqId) {
    this.worrkerService.getRequestDetails(reqId).subscribe(
      res => {
        console.log(res.recordset);
        const req = res.recordset;
        this.request.ClientId = res.recordset[0].ClientId;
        this.request.startTime = res.recordset[0].StartTime;
        this.request.endTime = res.recordset[0].ExpectedEndTime;
        this.request.date = res.recordset[0].OrderDate;
        for (const skill of this.skills) {
          if (skill.skillId === req.SkillId) {
            this.request.skill = skill.SkillTitle;
          }
        }

        // get client details for request
        this.dataService.getClientDetailsById(this.request.ClientId).subscribe(
          result => {
            this.request.firstname = result.recordset[0].FirstName;
            this.request.lastname = result.recordset[0].LastName;
            this.request.baseLocation = result.recordset[0].BaseLocation;
          }
        );
      }
    );
  }
}
