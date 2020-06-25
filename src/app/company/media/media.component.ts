import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.sass']
})
export class MediaComponent implements OnInit {

  constructor() { }

  isImageInfoChanged:boolean = false;

  ownerImage:string = "https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/people19.png";

  companyLogo:string = "https://www.leadersinsport.com/wp-content/uploads/2019/10/Uber-website-logo.png";

  onOwnerImageUpdate(newImage){
    this.isImageInfoChanged = true;
    this.ownerImage = newImage;
  }

  onOwnerImageDelete(){
    this.isImageInfoChanged = true;
    this.ownerImage = null;
  }

  onLogoUpdate(newLogo){
    this.isImageInfoChanged = true;
    this.companyLogo = newLogo;
  }

  onLogoDelete(){
    this.isImageInfoChanged = true;
    this.companyLogo = null;
  }

  saveMedia(){
    this.isImageInfoChanged = false;
  }

  ngOnInit(): void {}

}
