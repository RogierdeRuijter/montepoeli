import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormFieldComponent} from './form-field/form-field.component';
import {MaterialModule} from '../../../material/material.module';
import {IconModule} from '../icon/icon.module';
import {DropDownComponent} from './drop-down/drop-down.component';
import {FormsModule} from '@angular/forms';
import {CustomTranslateModule} from '../translate/custom-translate.module';
import {OptionNameComponent} from './drop-down/option-name/option-name.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    IconModule,
    FormsModule,
    CustomTranslateModule,
  ],
  declarations: [
    FormFieldComponent,
    DropDownComponent,
    OptionNameComponent,
  ],
  exports: [
    FormFieldComponent,
    DropDownComponent,
  ],
})
export class FormModule {
}
