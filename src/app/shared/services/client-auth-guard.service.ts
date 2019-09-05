import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientAuthGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate() {
    const role = this.userService.getUserType();
    if (this.userService.isLogged() && role === 'client') {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
