import { Component, OnInit } from '@angular/core';

@ Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  jobs: string[] = ['plumber', 'mechanic', 'driver'];
  jobType: string;
  date: string;
  time: string;
  baseLocation = 'Moratuwa';

  ngOnInit() {
  }

  printlocation(location) {
    console.log(location);
  }

  booknow() {
    console.log('booknow');
    console.log(this .jobType);
    console.log(this .date);
    console.log(this .time);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        this .printlocation(location);
      });
    }
  }
}
