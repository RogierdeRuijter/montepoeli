import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Icons, IconSize} from '../../../../../static-files/enums';

@Component({
  selector: 'app-option-name',
  templateUrl: './option-name.component.html',
  styleUrls: ['./option-name.component.scss'],
})
export class OptionNameComponent {

  @Input()
  public value: string;

  @Input()
  public showIcon: boolean;

  @Output()
  public iconClickEvent: EventEmitter<void> = new EventEmitter();

  public Icons = Icons;
  public IconSize = IconSize;

  public iconClick(): void {
    this.iconClickEvent.emit();
  }
}
