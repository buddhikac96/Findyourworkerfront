import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerRoutingModule } from './worker-routing.module';
import { NgxFloatButtonModule } from 'ngx-float-button';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './dashboard/requests/requests.component';
import { MyjobsComponent } from './dashboard/myjobs/myjobs.component';
import { FabComponent } from './dashboard/fab/fab.component';
import { ProfileComponent } from './dashboard/profile/profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    RequestsComponent,
    MyjobsComponent,
    FabComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxFloatButtonModule,
    FloatingActionMenuModule
  ]
})
export class WorkerModule { }
