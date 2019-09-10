import { Component, OnInit } from '@angular/core';

import { OrderService } from './../../../../shared/services/order.service';

@Component({
  selector: 'app-completedjobs',
  templateUrl: './completedjobs.component.html',
  styleUrls: ['./completedjobs.component.scss']
})
export class CompletedjobsComponent implements OnInit {

  orders;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = localStorage.getItem('UserId');
    this.orderService.getCompletedJobs(id).subscribe(
      res => {
        console.log(res);
        this.orders = res.result[0];
        console.log(this.orders);
      }
    );
  }
}
