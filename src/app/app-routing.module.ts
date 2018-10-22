import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: PagesComponent, loadChildren: './components/pages.module#PagesModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
