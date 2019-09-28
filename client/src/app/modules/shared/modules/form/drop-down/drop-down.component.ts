import {Component, EventEmitter, forwardRef, Input, Output, ViewChild} from '@angular/core';
import {ControlValueAccessor, DefaultValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelect} from '@angular/material';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),
      multi: true,
    },
  ],
})
export class DropDownComponent implements ControlValueAccessor {

  @Input()
  public id: string;

  @Input()
  public value: any;

  @Input()
  public options: any[];

  @Input()
  public optionDisplayField: string;

  @Input()
  public labelKey: string;

  @Output()
  public removeOptionEvent: EventEmitter<void> = new EventEmitter();

  @Output()
  public valueChange: EventEmitter<string> = new EventEmitter();

  @ViewChild(DefaultValueAccessor, {static: true})
  public valueAccessor: DefaultValueAccessor;

  @ViewChild('select', {static: true})
  public select: MatSelect;

  public writeValue(obj: any) {
    this.valueAccessor.writeValue(obj);
  }

  public registerOnChange(fn: any) {
    this.valueAccessor.registerOnChange(fn);
  }

  public registerOnTouched(fn: any) {
    this.valueAccessor.registerOnTouched(fn);
  }

  public setDisabledState(isDisabled: boolean) {
    this.valueAccessor.setDisabledState(isDisabled);
  }

  public removeOption(): void {
    this.select.ngControl.reset();
    this.valueChange.emit(null);
    this.select.close();
  }

  public getOptionName(option: any): any {
    return this.optionDisplayField ? option[this.optionDisplayField] : option;
  }

}
