import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizeDetectorDirective } from './resize-detector.directive';


@NgModule({
  declarations: [ ResizeDetectorDirective ],
  imports: [
    CommonModule
  ],
  exports: [ ResizeDetectorDirective ]
})
export class SharedDirectivesModule { }
