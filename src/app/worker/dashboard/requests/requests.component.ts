import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './../../../shared/services/user.service';
import { WorkerService } from './../../../shared/services/worker.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit, OnDestroy {

  myRequets: any[];
  sectionRefresher = true;

  constructor(
    private worrkerService: WorkerService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.worrkerService.workerRequestSectionRefresher.subscribe(
      res => {
        this.sectionRefresher = res;
        this.ngOnInit();
      }
    );
    const userId = this.userService.getUserId();
    // get all requests by workerId
    this.worrkerService.getAllRequests(userId).subscribe(
      res => {
        console.log(res);
        this.myRequets = res.result[0];
      }
    );
  }

  ngOnDestroy() {
    this.worrkerService.workerRequestSectionRefresher.unsubscribe();
    // this.worrkerService.getAllRequests(userId).
  }

}
