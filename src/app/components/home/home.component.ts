import { Component, OnInit } from '@angular/core';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(public libro: LibroService) { }

  ngOnInit() {
    this.libro.getLibros()
    .subscribe( libros => {
      console.log(libros)
    })
  }

  

}
