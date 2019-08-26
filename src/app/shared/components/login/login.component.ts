import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';

@ Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder
  ) {
    this .form = this .fb .group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required]
    });
  }

  loginSubmit(form) {
    console.log(form .value);
  }

  ngOnInit() {
  }

}
