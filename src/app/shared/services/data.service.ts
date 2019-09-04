import { Observable } from 'rxjs';
import { SkillModelRes } from './../models/skill.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@ Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getAllJobs() {
    return this.http.get<SkillModelRes>('http://localhost:3000/dataservices/getallskills');
  }

  getAllLocations(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/dataservices/getalllocations');
  }

}
