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
    return this.http.get<any>('http://localhost:3000/worker/profile/' + UserId);
  }

  addWorkerSkill(id, skillObj): Observable<any> {
    return this.http.post<any>('http://localhost:3000/worker/skill/' + id, {skillObj});
  }

  deleteWorkerSkill(id, skid): Observable<any> {
    console.log(id, skid);
    return this.http.request<any>('delete', 'http://localhost:3000/worker/skill/' + id, {body : { skillId : skid }});
  }

  editWorkerProfile(id, profileData): Observable<any> {
    console.log(profileData);
    return this.http.put<any>('http://localhost:3000/worker/profile/' + id, {
      fname: profileData.firstName,
      lname: profileData.lastName,
      baseL: profileData.location,
      contactno: profileData.phoneNumber
    });
  }
}
