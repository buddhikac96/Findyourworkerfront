import { WorkerService } from './../../../shared/services/worker.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

  myRequets: any[];

  constructor(
    private worrkerService: WorkerService
  ) { }

  ngOnInit() {
    this.worrkerService.getAllRequests(localStorage.getItem('UserId')).subscribe(
      res => {
        console.log(res);
        this.myRequets = res.result;
      }
    );
  }

}
