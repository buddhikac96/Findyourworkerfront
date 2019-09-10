import { ConfigService } from './../../../assets/config/config.service';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
  ) { }

  public workerRequestSectionRefresher = new Subject<boolean>();

  getProfile(UserId): Observable<any> {
    return this.http.get<any>(this.configService.baseUrl + '/worker/profile/' + UserId);
  }

  addWorkerSkill(id, skillObj): Observable<any> {
    return this.http.post<any>(this.configService.baseUrl + '/worker/skill/' + id, {skillObj});
  }

  deleteWorkerSkill(id, skid): Observable<any> {
    console.log(id, skid);
    return this.http.request<any>('delete', this.configService.baseUrl + '/worker/skill/' + id, {body : { skillId : skid }});
  }

  editWorkerProfile(id, profileData): Observable<any> {
    console.log(profileData);
    return this.http.put<any>(this.configService.baseUrl + '/worker/profile/' + id, {
      fname: profileData.firstName,
      lname: profileData.lastName,
      baseL: profileData.location,
      contactno: profileData.phoneNumber
    });
  }

  getAllRequests(UserId): Observable<any> {
    return this.http.get<any>(this.configService.baseUrl + '/requests/pool/worker/' + UserId);
  }

  getRequestDetails(reqId): Observable<any> {
    return this.http.get<any>(this.configService.baseUrl + '/requests/show/' + reqId);
  }

  getClientNameOfRequest(id): Observable<any> {
    return this.http.get<any>(this.configService.baseUrl + '/dataservices/getclientdetails/' + id);
  }

  acceptRequest(id, WorkerId): Observable<any> {
    return this.http.post<any>(this.configService.baseUrl + '/requests/accept/' + id, {WorkerId});
  }
}
