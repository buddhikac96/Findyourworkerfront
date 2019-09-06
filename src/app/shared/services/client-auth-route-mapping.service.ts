import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthRouteMappingService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate() {
    const role = this.userService.getUserType();
    if (this.userService.isLogged() && role === 'Client' || !this.userService.isLogged()) {
      return true;
    } else if (this.userService.isLogged() && role === 'worker') {
      this.router.navigate(['worker/dashboard']);
      return false;
    }
    return false;
  }
}
