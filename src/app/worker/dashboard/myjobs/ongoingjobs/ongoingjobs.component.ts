import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { OrderService } from './../../../../shared/services/order.service';

@Component({
  selector: 'app-ongoingjobs',
  templateUrl: './ongoingjobs.component.html',
  styleUrls: ['./ongoingjobs.component.scss']
})
export class OngoingjobsComponent implements OnInit, OnDestroy {

  orders;
  private getOngointJobsSub: Subscription;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    const id = localStorage.getItem('UserId');
    this.getOngointJobsSub = this.orderService.getOngointJobs(id).subscribe(
      res => {
        console.log(res);
        this.orders = res.result[0];
        console.log(this.orders);
      }
    );
  }

  ngOnDestroy() {
    if (this.getOngointJobsSub) {
      this.getOngointJobsSub.unsubscribe();
    }
  }

}
