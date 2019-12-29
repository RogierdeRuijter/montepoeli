import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncBaseComponent } from './components/async-base-component/async-base.component';

@NgModule({
  declarations: [
    AsyncBaseComponent
  ],
  exports: [
    AsyncBaseComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AsyncModule { }
