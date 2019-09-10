import { OrderService } from './../../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcomingjobs',
  templateUrl: './upcomingjobs.component.html',
  styleUrls: ['./upcomingjobs.component.scss']
})
export class UpcomingjobsComponent implements OnInit {

  orders;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = localStorage.getItem('UserId');
    this.orderService.getUpcomingJobs(id).subscribe(
      res => {
        console.log(res);
        this.orders = res.result[0];
        console.log(this.orders);
      }
    );
  }

}
