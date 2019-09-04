import { UserService } from './../../../shared/services/user.service';
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
    private worrkerService: WorkerService,
    private userService: UserService
  ) { }

  ngOnInit() {
    const userId = this.userService.getUserId();
    this.worrkerService.getAllRequests(userId).subscribe(
      res => {
        console.log(res);
        this.myRequets = res.result[1];
      }
    );
  }

}
