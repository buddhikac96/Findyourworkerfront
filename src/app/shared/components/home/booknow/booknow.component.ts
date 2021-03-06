import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@ Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit {

  @ Input() baseLocation: string;
  @ Input() jobTypeId: string;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  onclickBookNow() {
    if (this.jobTypeId === undefined) {
      this.toastr.info('Please select a Job', '', {
        timeOut: 3000,
        positionClass: 'toast-top-right',
      });
    } else {
      localStorage.setItem('jobTypeId', this.jobTypeId);
      this.router.navigate(['mapview', {jobType: this.jobTypeId}]);
      console.log('');
    }
  }

}
