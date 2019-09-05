import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerAuthGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate() {
    const role = this.userService.getUserType();
    if (this.userService.isLogged() && role === 'worker') {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

}
