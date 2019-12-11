import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconColor, Icons, IconSize } from '../../../../static-files/enums';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent {

  @Input()
  public icon: Icons;

  @Input()
  public iconSize: IconSize;

  @Input()
  public iconColor: IconColor;

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  public clicked(): void {
    this.clickEvent.emit();
  }

}
