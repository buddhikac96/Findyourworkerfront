import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkertesthomeComponent } from './workertesthome/workertesthome.component';


const routes: Routes = [
    {
        path: '',
        component: WorkertesthomeComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkerRoutingModule { }
