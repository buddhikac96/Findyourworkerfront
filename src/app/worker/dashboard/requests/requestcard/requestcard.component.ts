import { WorkerService } from './../../../../shared/services/worker.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-requestcard',
  templateUrl: './requestcard.component.html',
  styleUrls: ['./requestcard.component.scss']
})
export class RequestcardComponent implements OnInit {

  request: any;
  @Input() reqId: number;

  constructor(
    private workerService: WorkerService
  ) { }

  ngOnInit() {
    console.log('req card component');
    this.workerService.getRequestDetails(this.reqId).subscribe(
      res => {
        this.request = res.recordset;
        console.log(this.request);
      }
    );
  }

}
