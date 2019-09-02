import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerRoutingModule } from './worker-routing.module';
import { WorkertesthomeComponent } from './workertesthome/workertesthome.component';



@NgModule({
  declarations: [WorkertesthomeComponent],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class WorkerModule { }
