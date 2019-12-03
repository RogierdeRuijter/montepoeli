import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonIconComponent} from './components/button-icon/button-icon.component';
import {IconModule} from '../icon/icon.module';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {ButtonComponent} from './components/button/button.component';
import {ButtonRowComponent} from './components/button-row/button-row.component';
import {CustomTranslateModule} from '../translate/custom-translate.module';
import {GridModule} from '../grid/grid.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRowComponent,
    ButtonIconComponent
  ],
  exports: [
    ButtonComponent,
    ButtonRowComponent,
    ButtonIconComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    MatButtonModule,
    CustomTranslateModule,
    MatDialogModule,
    GridModule
  ]
})
export class ButtonModule { }
