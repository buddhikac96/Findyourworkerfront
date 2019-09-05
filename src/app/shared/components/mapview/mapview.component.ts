import { UserService } from './../../services/user.service';
import { RealTimeWorkerLocation, LocationPoint } from './../../models/locatoin.model';
import { Component, OnInit } from '@angular/core';
import { MapserviceService } from '../../services/mapservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent implements OnInit {

  jobTypeId: number;
  baseLocation: string;
  clientId: number;
  private sub: any;

  centerOfMap: LocationPoint;
  userCordinate: any;

  lat;
  lng;

  isLogged: boolean;

  url = '../../../../assets/img/icon-labour.png';

  constructor(
    private mapService: MapserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  realTimeWorekrs: RealTimeWorkerLocation[];

  public getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.userCordinate = position;
      console.log(position);
    });
  }

  ngOnInit() {
    this.getPosition();
    this.sub = this.route.params.subscribe(params => {
      /* tslint:disable:no-string-literal */
      this.jobTypeId = +params['jobType'];
      const clientId = this.userService.getUserId();
      this.mapService.getNearbyWorkers(this.jobTypeId, clientId, this.userCordinate).subscribe(
        res => {
          this.realTimeWorekrs = res.result.workers;
          this.lat = res.result.centerOfMap.latitude;
          this.lng = res.result.centerOfMap.longitude;
          console.log(this.realTimeWorekrs);
        }
      );
    });

    this.isLogged = this.userService.isLogged();
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  sendRequest() {
    const availableWorkerIdList = [];
    const location = '6.7881,79.8913';
    for (const worker of this.realTimeWorekrs) {
      availableWorkerIdList.push(worker.WorkerId);
    }
    this.mapService.sendUrgentRequest(this.jobTypeId, this.clientId, availableWorkerIdList, location).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
