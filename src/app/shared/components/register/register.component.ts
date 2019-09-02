import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../validators/confirmpassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this .form = this .fb .group({
      username: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      confirmPassword: ['', [
        Validators.required,
        ConfirmPasswordValidator('password')
      ]],
      contactNumber: ['', Validators.required],
      userType: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  registerSubmit(form) {
    this.userService.registerUser(this.form.username, this.form.password, this.form.contactNumber, this.form.userType).subscribe(
      result => {
        console.log(result);
        if (result.status === 200) {
          this.toastr.success('User Registerd Succesfully');
          this.router.navigate(['login']);
        } else {
          this.toastr.error('User registration Failed', result.message);
        }
      }
    );
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
