import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-upload-form-shared',
  templateUrl: './media-upload-form-shared.component.html',
  styleUrls: ['./media-upload-form-shared.component.scss']
})
export class MediaUploadFormSharedComponent implements OnInit {

  @Input() squareAspect: Boolean = false;
  @Input() header: String = '';

  constructor() { }

  uploadedFile = null;
  croppedImage = null;
  isImageCropped: Boolean = false;

  onFileSelected(files){
    console.log(files);
    this.isImageCropped = false;
    this.uploadedFile = files[0];
    this.croppedImage = null;
  }

  imageCropped(image){
    console.log(image);
    this.croppedImage = image;
  }

  imageLoaded(){}

  cropperReady(){}

  loadImageFailed(){}

  deleteImage(){
    this.uploadedFile = null;
    this.croppedImage = null;
    this.isImageCropped = false;
  }

  cropImage(){
    this.isImageCropped = true;
  }

  ngOnInit(): void {}

}
