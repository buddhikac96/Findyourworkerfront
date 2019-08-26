import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesthomeComponent } from './testhome/testhome.component';


const routes: Routes = [
  {
    path: '',
    component: TesthomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
