import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigService } from './../../../assets/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  getUpcomingJobs(id): Observable<any> {
    return this.http.get<any>('http://localhost:3000/ordersWorker/getUpComingOrders/' + id);
  }

  getOngointJobs(id): Observable<any> {
    return this.http.get<any>('http://localhost:3000/ordersWorker/getOngoingOrders/' + id);
  }

  getCompletedJobs(id): Observable<any> {
    return this.http.get<any>('http://localhost:3000/ordersWorker/getCompletedOrders/' + id);
  }
}
