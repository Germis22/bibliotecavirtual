import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(public login: LoginService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      registro: ['', [Validators.required]],
      ci: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  Login() {
    /* console.log(this.formulario.value); */
    this.login.login(this.formulario.value)
    .subscribe( data => {
      /* console.log(data) */
    });
  }

}
