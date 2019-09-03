import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsComponent } from './dashboard/requests/requests.component';
import { MyjobsComponent } from './dashboard/myjobs/myjobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children : [
            {
                path: 'requests',
                component: RequestsComponent
            },
            {
                path: 'myjobs',
                component: MyjobsComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
