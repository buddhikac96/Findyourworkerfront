import { Component, OnInit, Input } from '@angular/core';

@ Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit {

  @ Input() baseLocation: string;
  @ Input() jobType: string;

  constructor() { }

  ngOnInit() {
  }

  onclickBookNow() {
    console.log(this .baseLocation);
    console.log(this .jobType);
  }

}
