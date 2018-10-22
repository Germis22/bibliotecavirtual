import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logeado: boolean = false;
  username = 'nombre de usuario';
  url = 'http://localhost:3000';

  constructor(public http: HttpClient, private toastr: ToastrService, private router: Router) { }

  login(usuario: any) {
    const urllogin = `${this.url}/usuario/login`;
    return this.http.post(urllogin, usuario)
    .pipe( map( (data: any) => {
      if (data.ok === true) {
        console.log(data.usuario)
        this.username = `${data.usuario.nombre} ${data.usuario.apellido}`
        this.router.navigate(['']);
        this.logeado = true;
        this.toastr.success(`Bievenido ${data.usuario.nombre} ${data.usuario.apellido}`, 'Login');
      }
    }), catchError( (error: any) => {
      this.handleAuthError(error);
      return of (error);
    }));
  }

  logout() {
    this.logeado = false;
    this.toastr.success('sesion cerrada', 'Adios')
    this.router.navigate(['/login'])
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 400) {
      this.toastr.error(`registro o CI incorrecto`, 'Error');
      return of(err.message);
    }
    throw Error;
  }

}
