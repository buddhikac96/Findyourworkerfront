import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { OrderService } from './../../../../shared/services/order.service';

@Component({
  selector: 'app-completedjobs',
  templateUrl: './completedjobs.component.html',
  styleUrls: ['./completedjobs.component.scss']
})
export class CompletedjobsComponent implements OnInit, OnDestroy {

  orders;
  private getCompletedJobsSub: Subscription;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = localStorage.getItem('UserId');
    this.getCompletedJobsSub = this.orderService.getCompletedJobs(id).subscribe(
      res => {
        console.log(res);
        this.orders = res.result[0];
        console.log(this.orders);
      }
    );
  }

  ngOnDestroy() {
    if (this.getCompletedJobsSub) {
      this.getCompletedJobsSub.unsubscribe();
    }
  }
}
