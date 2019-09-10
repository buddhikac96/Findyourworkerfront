import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.scss']
})
export class MyjobsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(link) {
    this.router.navigate(['/worker/dashboard/myjobs/' + link]);
  }

}
