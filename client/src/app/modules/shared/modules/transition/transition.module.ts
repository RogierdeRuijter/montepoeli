import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowAndHideDirective } from './show-and-hide.directive';

@NgModule({
  declarations: [ShowAndHideDirective],
  exports: [ShowAndHideDirective],
  imports: [
    CommonModule
  ]
})
export class TransitionModule { }
