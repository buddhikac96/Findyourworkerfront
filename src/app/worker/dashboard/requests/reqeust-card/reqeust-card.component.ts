import { DataService } from './../../../../shared/services/data.service';
import { WorkerService } from './../../../../shared/services/worker.service';
import { RequestCard } from './../../../../shared/models/request.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reqeust-card',
  templateUrl: './reqeust-card.component.html',
  styleUrls: ['./reqeust-card.component.scss']
})
export class ReqeustCardComponent implements OnInit {

  @Input() requestId: number;
  request: RequestCard = new RequestCard();
  skills = [];

  constructor(
    private workerService: WorkerService,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.getAllJobs().subscribe(
      response => {
        this.skills = response.recordset;
        this.workerService.getRequestDetails(this.requestId).subscribe(
          res => {
            console.log(res.recordset[0]);
            const req = res.recordset[0];
            this.request.ClientId = res.recordset[0].ClientId;
            this.request.startTime = res.recordset[0].StartTime;
            this.request.endTime = res.recordset[0].ExpectedEndTime;
            this.request.date = res.recordset[0].OrderDate;
            for (const skill of this.skills) {
              // console.log(request.SkillId);
              if (skill.SkillId === req.SkillId) {
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
    );
  }

  acceptRequest(id) {
    this.workerService.acceptRequest(id, localStorage.getItem('UserId')).subscribe(
      res => {
        this.workerService.workerRequestSectionRefresher.next(false);
        console.log(res);
      }
    );
  }
}
