import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.sass']
})
export class ClientFormComponent implements OnInit {

  userForm:FormGroup;

  constructor() {
    this.userForm = new FormGroup({});
    this.userForm.addControl('first_name', new FormControl('', [Validators.required]));
    this.userForm.addControl('last_name', new FormControl('', [Validators.required]));
    this.userForm.addControl('phone', new FormControl('', [Validators.required]));
    this.userForm.addControl('email', new FormControl('', [Validators.required, Validators.email]));
    this.userForm.addControl('agreement', new FormControl(false, Validators.required));
  }

  ngOnInit(): void {}

  get first_name() { return this.userForm.get('first_name'); }

  get last_name() { return this.userForm.get('last_name'); }

  get phone() { return this.userForm.get('phone'); }

  get email() { return this.userForm.get('email'); }

  get agreement() { return this.userForm.get('agreement'); }

}
