import { ConfigService } from './../../../assets/config/config.service';
import { Observable } from 'rxjs';
import { SkillModelRes } from './../models/skill.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@ Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private confService: ConfigService
  ) { }

  getAllJobs(): Observable<any> {
    return this.http.get<SkillModelRes>(this.confService.baseUrl + '/dataservices/getallskills');
  }

  getAllLocations(): Observable<any> {
    return this.http.get<any>(this.confService.baseUrl + '/dataservices/getalllocations');
  }

  getClientDetailsById(id): Observable<any> {
    return this.http.get(this.confService.baseUrl + '/dataservices/getclientdetails/' + id);
  }
}
