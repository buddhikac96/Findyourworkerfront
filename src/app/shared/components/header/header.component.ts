import { LoginComponent } from './../login/login.component';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor(  ) { }

  ngOnInit() {
    if (localStorage.getItem('sessionEmail') === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }

    console.log(this.isLogged);
  }

}
