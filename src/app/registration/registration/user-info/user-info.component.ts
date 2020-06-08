import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userForm:FormGroup;

  constructor() {
    this.userForm = new FormGroup({});
    this.userForm.addControl('name', new FormControl('', [Validators.required]));
    this.userForm.addControl('last_name', new FormControl('', [Validators.required]));
    this.userForm.addControl('username', new FormControl('', [Validators.required]));
    this.userForm.addControl('email', new FormControl('', [Validators.required, Validators.email]));
    this.userForm.addControl('password', new FormControl('', [Validators.required]));
    this.userForm.addControl('repeat_password', new FormControl('', [ Validators.compose(
      [ Validators.required, this.validateAreEqual.bind(this) ]
    )]));
  }

  ngOnInit(): void {}

  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.password.value ? null : {
      passwordMismatch: true
    };
  }

  get name() { return this.userForm.get('name'); }

  get last_name() { return this.userForm.get('last_name'); }

  get username() { return this.userForm.get('username'); }

  get email() { return this.userForm.get('email'); }

  get password() { return this.userForm.get('password'); }

  get repeat_password() { return this.userForm.get('repeat_password'); }

}
