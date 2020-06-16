import { Directive, ElementRef, DoCheck, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appResizeDetector]'
})
export class ResizeDetectorDirective implements DoCheck {

  elementWidth:Number = 0;
  isInitialWidthSet:Boolean = false;

  @Output() widthChanged:EventEmitter<void> = new EventEmitter();

  constructor(private _elRef:ElementRef) { }

  ngDoCheck(){
    if(!this.isInitialWidthSet){
      this.elementWidth = this._elRef.nativeElement.clientWidth;
      this.isInitialWidthSet = true;
    }
    else{
      if(this._elRef.nativeElement.clientWidth!==this.elementWidth){
        this.elementWidth = this._elRef.nativeElement.clientWidth;
        this.widthChanged.emit();
      }
    }
  }

}
