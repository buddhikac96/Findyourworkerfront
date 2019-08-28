import { RealTimeWorkerLocation, RealTimeWorkerLocationArray } from './../models/locatoin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  constructor(
    private http: HttpClient
  ) { }


  getNearbyWorkers(jobType, baseLocation) {
    return this.http.post<RealTimeWorkerLocationArray>(
      'http://localhost:3000/booknow/booknow',
      {'jobType' : jobType, 'baseLocation' : baseLocation}
    );
  }
}
