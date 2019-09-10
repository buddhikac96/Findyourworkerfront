import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from './../../../assets/config/config.service';
import { ServerResponse } from './../models/response.model';

@ Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  constructor(
    private http: HttpClient,
    private confService: ConfigService
  ) { }


  getNearbyWorkers(jobType, clientId, cordinate): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(
      this.confService.baseUrl + '/booknow/booknow', {jobType, clientId, cordinate}
    );
  }

  sendUrgentRequest(jobTypeId, clientId, workers, location): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(
      this.confService.baseUrl + '/booknow/sendUrgentRequest', {jobTypeId, clientId, workers, location}
    );
  }
}
