import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  @Input() defaultValues:Array<{name:string, url:string}> = null;

  @Output() onChange:EventEmitter<Array<{name:string, url:string}>> = new EventEmitter();

  ngOnInit(): void {
    if(!this.defaultValues){
      this.socialsBlocks.push(new FormGroup({
        name: new FormControl('', Validators.required),
        url: new FormControl('', [Validators.required, Validators.pattern(web_reg)])
      }));
    }
    else {
      this.defaultValues.forEach(link => {
        this.socialsBlocks.push(new FormGroup({
          name: new FormControl(link.name, Validators.required),
          url: new FormControl(link.url, [Validators.required, Validators.pattern(web_reg)])
        }));
      });
    }
  }

  addSocialLinks(){
    this.socialsBlocks.push(new FormGroup({
      name: new FormControl('', Validators.required),
      url: new FormControl('', [Validators.required, Validators.pattern(web_reg)])
    }));
    this.onChange.emit(this.socialsBlocks.value);
  }

  removeSocialLinks(index: number){
    this.socialsBlocks.removeAt(index);
    console.log(this.socialsBlocks.value);
    this.onChange.emit(this.socialsBlocks.value);
  }

}
