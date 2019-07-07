import {Component, forwardRef, ViewChild} from '@angular/core';
import {ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
})
export class FormFieldComponent implements ControlValueAccessor {

  @ViewChild(DefaultValueAccessor, {static: true}) valueAccessor: DefaultValueAccessor;

  writeValue(obj: any) {
    this.valueAccessor.writeValue(obj);
  }

  registerOnChange(fn: any) {
    this.valueAccessor.registerOnChange(fn);
  }

  registerOnTouched(fn: any) {
    this.valueAccessor.registerOnTouched(fn);
  }

  setDisabledState(isDisabled: boolean) {
    this.valueAccessor.setDisabledState(isDisabled);
  }

}
