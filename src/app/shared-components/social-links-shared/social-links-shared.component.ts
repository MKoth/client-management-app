import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, ValidatorFn, AbstractControl} from '@angular/forms';

const web_reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

@Component({
  selector: 'app-social-links-shared',
  templateUrl: './social-links-shared.component.html',
  styleUrls: ['./social-links-shared.component.sass']
})
export class SocialLinksSharedComponent implements OnInit {

  socialsBlocks = new FormArray([]);
  
  constructor() { }

  ngOnInit(): void {
    this.socialsBlocks.push(new FormGroup({
      name: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, Validators.pattern(web_reg)])
    }));
  }

  addSocialLinks(){
    this.socialsBlocks.push(new FormGroup({
      name: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, Validators.pattern(web_reg)])
    }));
  }

  removeSocialLinks(index: number){
    this.socialsBlocks.removeAt(index);
  }

}
