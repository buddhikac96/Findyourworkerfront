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

  lat;
  lng;

  url = '../../../../assets/img/icon-labour.png';

  constructor(
    private mapService: MapserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  realTimeWorekrs: RealTimeWorkerLocation[];

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      /* tslint:disable:no-string-literal */
      this.jobTypeId = +params['jobType'];
      this.baseLocation = params['location'];
      this.mapService.getNearbyWorkers(this.jobTypeId, this.baseLocation).subscribe(
        res => {
          this.realTimeWorekrs = res.result.workers;
          this.lat = res.result.centerOfMap.latitude;
          this.lng = res.result.centerOfMap.longitude;
          console.log(res);
        }
      );
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  sendRequest() {
    this.mapService.sendUrgentRequest(this.jobTypeId, this.clientId, this.realTimeWorekrs).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
