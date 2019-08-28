import { SkillModel } from './../models/skill.model';
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
    return this.http.get<SkillModel>('http://localhost:3000/dataservices/getallskills');
  }

}
