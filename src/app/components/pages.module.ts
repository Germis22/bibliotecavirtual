import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Pipe Module
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.router';
import { HomeComponent } from './home/home.component';





@NgModule({

  declarations:[
    HomeComponent
    ],
  exports:[
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    FormsModule,
  ]
})

export class PagesModule {}
