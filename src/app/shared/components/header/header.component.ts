import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;
  subscription: Subscription;
  message: string;

  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.isLogged = this.userservice.isLogged();
    // console.log(this.isLogged);

    this.userservice.headerStateChange.subscribe(
      res => {
        this.isLogged = res;
      }
    );

    if (this.userservice.isLogged()) {
      this.userservice.headerStateChange.next(true);
    }

  }

  navigateToProfile() {
    if (this.userservice.getUserType() === 'worker') {
      this.router.navigate(['worker']);
    } else {
      this.router.navigate(['client']);
    }
  }

  logout() {
    this.router.navigate(['']);
    this.userservice.logout();
    localStorage.removeItem('sessionEmail');
    localStorage.removeItem('sessionType');
    this.userservice.headerStateChange.next(false);
  }

}
