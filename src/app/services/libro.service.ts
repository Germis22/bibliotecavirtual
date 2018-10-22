import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  url = 'http://localhost:3000/libro';

  constructor(public http: HttpClient) { }


  getLibros() {
    return this.http.get(this.url)
  }
}
