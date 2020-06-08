import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor() { 
    this.loginForm = new FormGroup({
      "login": new FormControl("", [Validators.required, Validators.email] ),
      "password": new FormControl("", [Validators.required ])
  });
  }

  ngOnInit(): void {
  }

  get login() { return this.loginForm.get('login'); }

  get password() { return this.loginForm.get('password'); }

}
