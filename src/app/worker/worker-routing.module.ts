import { CompletedjobsComponent } from './dashboard/myjobs/completedjobs/completedjobs.component';
import { UpcomingjobsComponent } from './dashboard/myjobs/upcomingjobs/upcomingjobs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestsComponent } from './dashboard/requests/requests.component';
import { MyjobsComponent } from './dashboard/myjobs/myjobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { OngoingjobsComponent } from './dashboard/myjobs/ongoingjobs/ongoingjobs.component';

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
                component: MyjobsComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'upcoming'
                    },
                    {
                        path: 'upcoming',
                        component: UpcomingjobsComponent
                    },
                    {
                        path: 'ongoing',
                        component: OngoingjobsComponent
                    },
                    {
                        path: 'completed',
                        component: CompletedjobsComponent
                    }
                ]
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
