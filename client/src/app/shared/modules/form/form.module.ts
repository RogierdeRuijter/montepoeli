import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.module';
import {DropDownComponent} from './components/drop-down/drop-down.component';
import {FormsModule} from '@angular/forms';
import {CustomTranslateModule} from '../translate/custom-translate.module';
import {OptionNameComponent} from './components/drop-down/option-name/option-name.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    FormsModule,
    CustomTranslateModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  declarations: [
    DropDownComponent,
    OptionNameComponent,
  ],
  exports: [
    DropDownComponent,
  ],
})
export class FormModule {
}
