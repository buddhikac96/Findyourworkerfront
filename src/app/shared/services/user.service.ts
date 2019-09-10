import { Router } from '@angular/router';
import { LoginResponse, RegisterResponse } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { ConfigService } from './../../../assets/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public headerStateChange = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private router: Router,
    private confService: ConfigService
  ) { }

  loginUser(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.confService.baseUrl + '/user/login', { UserEmail: username, Password: password });
  }

  registerUser(username, password, mobile, type): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.confService.baseUrl + '/user/register', {
      UserEmail: username,
      Password: password,
      ContactNumber: mobile,
      UserType: type
    });
  }

  logout() {
    this.router.navigate(['']);
    return this.http.post(this.confService.baseUrl + '/user/logout', {});
  }

  isLogged() {
    if (localStorage.getItem('sessionEmail') === null) {
      return false;
    }
    return true;
  }

  getUserType() {
    return localStorage.getItem('sessionType');
  }

  getUserId() {
    return localStorage.getItem('UserId');
  }


}
