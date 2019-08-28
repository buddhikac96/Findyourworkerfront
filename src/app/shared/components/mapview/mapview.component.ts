import { RealTimeWorkerLocation } from './../../models/locatoin.model';
import { Component, OnInit } from '@angular/core';
import { MapserviceService } from '../../services/mapservice.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.component.html',
  styleUrls: ['./mapview.component.scss']
})
export class MapviewComponent implements OnInit {

  jobTypeId: number;
  baseLocation: string;
  private sub: any;

  url = '../../../../assets/img/icon-labour.png';

  constructor(
    private mapService: MapserviceService,
    private route: ActivatedRoute
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
          this.realTimeWorekrs = res.recordset;
          console.log(this.realTimeWorekrs);
        }
      );
    });
  }

}
