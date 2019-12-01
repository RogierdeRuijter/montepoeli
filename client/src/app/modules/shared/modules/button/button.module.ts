import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { IconModule } from '../icon/icon.module';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [ButtonIconComponent],
  exports: [ButtonIconComponent],
  imports: [
    CommonModule,
    IconModule,
    MatButtonModule
  ]
})
export class ButtonModule { }
