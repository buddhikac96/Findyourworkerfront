import { MapserviceService } from './../../../services/mapservice.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@ Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit {

  @ Input() baseLocation: string;
  @ Input() jobTypeId: string;

  constructor(
    private mapService: MapserviceService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onclickBookNow() {
    this.router.navigate(['mapview', {location: this.baseLocation, jobType: this.jobTypeId}]);
  }

}
