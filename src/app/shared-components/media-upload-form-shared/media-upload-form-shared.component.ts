import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-upload-form-shared',
  templateUrl: './media-upload-form-shared.component.html',
  styleUrls: ['./media-upload-form-shared.component.scss']
})
export class MediaUploadFormSharedComponent implements OnInit {

  @Input() squareAspect: Boolean = false;
  @Input() header: String = '';
  @Input() defaultImage: String = null;
  @Output() onImageUpdated = new EventEmitter<string>();
  @Output() onImageDeleted = new EventEmitter<string>();

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
    this.defaultImage = null;
    this.onImageDeleted.emit();
  }

  cropImage(){
    this.isImageCropped = true;
    this.onImageUpdated.emit(this.croppedImage.base64);
  }

  ngOnInit(): void {}

}
