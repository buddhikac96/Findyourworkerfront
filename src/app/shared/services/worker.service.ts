import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(
    private http: HttpClient
  ) { }

  getAllRequests(UserId): Observable<any> {
    return this.http.get<any>('http://localhost:3000/requests/pool/worker/' + UserId);
  }

  getProfile(UserId): Observable<any> {
    return this.http.get('http://localhost:3000/worker/profile/' + UserId);
  }
}
