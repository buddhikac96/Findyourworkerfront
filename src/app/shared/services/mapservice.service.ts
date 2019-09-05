import { ServerResponse } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';

@ Injectable({
  providedIn: 'root'
})
export class MapserviceService {

  constructor(
    private http: HttpClient
  ) { }


  getNearbyWorkers(jobType, clientId, cordinate): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(
      'http://localhost:3000/booknow/booknow', {jobType, clientId, cordinate}
    );
  }

  sendUrgentRequest(jobTypeId, clientId, workers, location): Observable<ServerResponse> {
    return this.http.post<ServerResponse>(
      'http://localhost:3000/booknow/sendUrgentRequest', {jobTypeId, clientId, workers, location}
    );
  }
}
