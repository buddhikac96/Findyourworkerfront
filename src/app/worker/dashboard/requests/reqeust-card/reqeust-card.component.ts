import { Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { DataService } from './../../../../shared/services/data.service';
import { WorkerService } from './../../../../shared/services/worker.service';
import { RequestCard } from './../../../../shared/models/request.model';

@Component({
  selector: 'app-reqeust-card',
  templateUrl: './reqeust-card.component.html',
  styleUrls: ['./reqeust-card.component.scss']
})
export class ReqeustCardComponent implements OnInit, OnDestroy {

  @Input() requestId: number;
  request: RequestCard = new RequestCard();
  skills = [];

  orderLat: string;
  orderLng: string;

  private getRequestDetailsSubscription: Subscription;
  private getAllJobsSubscription: Subscription;
  private getClientDetailsByIdSubscription: Subscription;
  private acceptRequestSubscription: Subscription;

  constructor(
    private workerService: WorkerService,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.getAllJobsSubscription = this.dataService.getAllJobs().subscribe(
      response => {
        this.skills = response.recordset;
        this.getRequestDetailsSubscription = this.workerService.getRequestDetails(this.requestId).subscribe(
          res => {
            console.log(res.recordset[0]);
            const req = res.recordset[0];
            this.request.ClientId = res.recordset[0].ClientId;
            this.request.startTime = res.recordset[0].StartTime;
            this.request.endTime = res.recordset[0].ExpectedEndTime;
            this.request.date = res.recordset[0].OrderDate;
            this.request.location = res.recordset[0].OrderLocation;
            const locationArr = this.request.location.split(',');
            this.orderLat = locationArr[0];
            this.orderLng = locationArr[1];
            console.log(this.orderLng);
            for (const skill of this.skills) {
              // console.log(request.SkillId);
              if (skill.SkillId === req.SkillId) {
                this.request.skill = skill.SkillTitle;
              }
            }
            // get client details for request
            this.getClientDetailsByIdSubscription = this.dataService.getClientDetailsById(this.request.ClientId).subscribe(
              result => {
                this.request.firstname = result.recordset[0].FirstName;
                this.request.lastname = result.recordset[0].LastName;
                this.request.baseLocation = result.recordset[0].BaseLocation;
              }
            );
          }
        );
      }
    );
  }

  acceptRequest(id) {
    this.acceptRequestSubscription = this.workerService.acceptRequest(id, localStorage.getItem('UserId')).subscribe(
      res => {
        this.workerService.workerRequestSectionRefresher.next(false);
        console.log(res);
      }
    );
  }

  ngOnDestroy() {
    if (this.acceptRequestSubscription) {
      this.acceptRequestSubscription.unsubscribe();
    }
    if (this.getAllJobsSubscription) {
      this.getAllJobsSubscription.unsubscribe();
    }
    if (this.getClientDetailsByIdSubscription) {
      this.getClientDetailsByIdSubscription.unsubscribe();
    }
    if (this.getRequestDetailsSubscription) {
      this.getRequestDetailsSubscription.unsubscribe();
    }
  }
}
