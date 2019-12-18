import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Icons, IconSize } from 'src/app/shared/static-files/enums';

@Component({
  selector: 'app-button-icon-active-state',
  templateUrl: './button-icon-active-state.component.html',
  styleUrls: ['./button-icon-active-state.component.scss']
})
export class ButtonIconActiveStateComponent {
  
  @Input()
  public icon: Icons;
  
  @Input()
  public iconSize: IconSize;
  
  @Input()
  public active: boolean;

  @Input()
  public squareButton: boolean;

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  public clickHandler(): void {
    this.clickEvent.emit();
  }

}
