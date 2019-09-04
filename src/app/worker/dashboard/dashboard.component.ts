import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from '../../../../node_modules/ng2-floating-action-menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'app';
  config;
  buttons: Array<FloatingActionButton> = [
    {
      iconClass: 'fas fa-briefcase',
      label: 'My Jobs',
      onClick: () => {
        this.router.navigate(['worker/dashboard/myjobs']);
      }
    },
    {
      iconClass: 'fas fa-business-time',
      label: 'Requests',
      onClick: () => {
        this.router.navigate(['worker/dashboard/requests']);
      }
    },
    {
      iconClass: 'fas fa-user-circle',
      label: 'Profile',
      onClick: () => {
        this.router.navigate(['worker/dashboard/profile']);
      }
    },
  ];

  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];

  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];

  toggles = [
    'click',
    'hover'
  ];

  constructor(
    private router: Router
  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-zoomin',
      iconClass: 'fas fa-cog',
      activeIconClass: 'fas fa-cog',
      toggle: 'click',
      buttons: this.buttons
    };
  }

  ngOnInit() {
  }

}
