import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerRoutingModule } from './worker-routing.module';
import { NgxFloatButtonModule } from 'ngx-float-button';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RequestsComponent } from './dashboard/requests/requests.component';
import { MyjobsComponent } from './dashboard/myjobs/myjobs.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SkillComponent } from './dashboard/profile/skill/skill.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RequestsComponent,
    MyjobsComponent,
    ProfileComponent,
    SkillComponent
  ],
  imports: [
    CommonModule,
    WorkerRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxFloatButtonModule,
    FloatingActionMenuModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WorkerModule { }
