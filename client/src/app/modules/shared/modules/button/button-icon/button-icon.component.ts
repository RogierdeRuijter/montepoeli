import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Icons, IconSize } from '../../../static-files/enums';

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

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  public clicked(): void {
    this.clickEvent.emit();
  }

}
