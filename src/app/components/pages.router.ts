import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const PagesRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: '/', pathMatch: 'full'}

];


export const PAGES_ROUTES = RouterModule.forChild( PagesRoutes );