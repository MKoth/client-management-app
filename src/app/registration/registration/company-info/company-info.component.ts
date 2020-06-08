import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

const web_reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.sass']
})
export class CompanyInfoComponent implements OnInit {

  companyForm:FormGroup;

  constructor() {
    this.companyForm = new FormGroup({});
    this.companyForm.addControl('company_name', new FormControl('', [Validators.required]));
    this.companyForm.addControl('website', new FormControl('', [Validators.required, Validators.pattern(web_reg)]));
    this.companyForm.addControl('address', new FormControl('', [Validators.required]));
    this.companyForm.addControl('description', new FormControl('', [Validators.required, Validators.minLength(6)]));
    this.companyForm.addControl('currency', new FormControl('', [Validators.required]));
    this.companyForm.addControl('vat', new FormControl('', [Validators.required]));
    this.companyForm.addControl('timezone', new FormControl('', [Validators.required]));
    this.companyForm.addControl('language', new FormControl('', [Validators.required]));
  }

  ngOnInit(): void {  }

  get company_name() { return this.companyForm.get('company_name'); }

  get website() { return this.companyForm.get('website'); }

  get address() { return this.companyForm.get('address'); }

  get description() { return this.companyForm.get('description'); }

  get currency() { return this.companyForm.get('currency'); }

  get vat() { return this.companyForm.get('vat'); }

  get timezone() { return this.companyForm.get('timezone'); }
  
  get language() { return this.companyForm.get('language'); }

}
