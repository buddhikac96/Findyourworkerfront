import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@ Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this .form = this .fb .group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
    });
  }

  loginSubmit() {
    this.userService.loginUser(this.username.value, this.password.value).subscribe(
      result => {
        if (result.status === 200 && result.message === 'Authorized') {
          this.toastr.success('Login Success');
          localStorage.setItem('sessionEmail', result.result.sessionEmail);
          localStorage.setItem('sessionType', result.result.sessionType);
          localStorage.setItem('UserId', result.result.UserId);

          this.userService.headerStateChange.next(true);

          if (result.result.sessionType === 'worker') {
            this.router.navigate(['worker']);
          } else {
            this.router.navigate(['']);
          }
        } else {
          this.form.reset();
          this.toastr.error('Login Failed');
        }
      }
    );
  }

  ngOnInit() {
  }

  get username() {return this.form.get('username'); }
  get password() {return this.form.get('password'); }


}
