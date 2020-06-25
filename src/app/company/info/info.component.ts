import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

const web_reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

  companyForm:FormGroup;

  userForm:FormGroup;

  isCompanyFormUpdated:boolean = false;

  isUserFormUpdated:boolean = false;

  companyData = {
    company_name: "Uber",
    website: "www.uber.com",
    address: "Rhod Island",
    description: "Company is occupied with transfering passengers",
    currency: "usd",
    vat: "20",
    timezone: "GMT+0:00",
    language: "en"
  }

  userData = {
    name: 'James',
    last_name: 'Brooks',
    username: 'jbrooks',
    email: 'jbrooks@mail.com'
  }

  constructor() {
    this.companyForm = new FormGroup({});
    this.companyForm.addControl('company_name', new FormControl(this.companyData.company_name, [Validators.required]));
    this.companyForm.addControl('website', new FormControl(this.companyData.website, [Validators.required, Validators.pattern(web_reg)]));
    this.companyForm.addControl('address', new FormControl(this.companyData.address, [Validators.required]));
    this.companyForm.addControl('description', new FormControl(this.companyData.description, [Validators.required, Validators.minLength(6)]));
    this.companyForm.addControl('currency', new FormControl(this.companyData.currency, [Validators.required]));
    this.companyForm.addControl('vat', new FormControl(this.companyData.vat, [Validators.required]));
    this.companyForm.addControl('timezone', new FormControl(this.companyData.timezone, [Validators.required]));
    this.companyForm.addControl('language', new FormControl(this.companyData.language, [Validators.required]));

    this.userForm = new FormGroup({});
    this.userForm.addControl('name', new FormControl(this.userData.name, [Validators.required]));
    this.userForm.addControl('last_name', new FormControl(this.userData.last_name, [Validators.required]));
    this.userForm.addControl('username', new FormControl(this.userData.username, [Validators.required]));
    this.userForm.addControl('email', new FormControl(this.userData.email, [Validators.required, Validators.email]));
  }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    this.companyForm.valueChanges.subscribe(val => {
      this.isCompanyFormUpdated = true;
    });
  }

  updateCompanyForm(){
    this.isCompanyFormUpdated = false;
  }

  updateUserForm(){
    this.isUserFormUpdated = false;
  }

  get company_name() { return this.companyForm.get('company_name'); }

  get website() { return this.companyForm.get('website'); }

  get address() { return this.companyForm.get('address'); }

  get description() { return this.companyForm.get('description'); }

  get currency() { return this.companyForm.get('currency'); }

  get vat() { return this.companyForm.get('vat'); }

  get timezone() { return this.companyForm.get('timezone'); }
  
  get language() { return this.companyForm.get('language'); }



  get name() { return this.userForm.get('name'); }

  get last_name() { return this.userForm.get('last_name'); }

  get username() { return this.userForm.get('username'); }

  get email() { return this.userForm.get('email'); }

}
