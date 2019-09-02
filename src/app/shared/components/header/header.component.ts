import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor(
    private userservice: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userservice.isLogged() === 'null') {
      this.isLogged = false;
    } else {
      this.isLogged = true;
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
    this.userservice.logout();
    localStorage.removeItem('sessionEmail');
    localStorage.removeItem('sessinType');
  }

}
