import { HeaderComponent } from './shared/components/header/header.component';
import { MapviewComponent } from './shared/components/mapview/mapview.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'mapview',
    component: MapviewComponent
  },
  {
    path: 'worker',
    loadChildren: () => import('./worker/worker.module').then(mod => mod.WorkerModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(mod => mod.ClientModule)
  },
  {
    path: 'refreshHeader',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
