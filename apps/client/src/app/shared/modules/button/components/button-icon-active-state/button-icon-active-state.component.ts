import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Icons, IconSize } from '../../../../static-files/enums';

@Component({
  selector: 'app-button-icon-active-state',
  templateUrl: './button-icon-active-state.component.html',
  styleUrls: ['./button-icon-active-state.component.scss']
})
export class ButtonIconActiveStateComponent implements OnChanges {
  
  @Input()
  public icon: Icons;
  
  @Input()
  public iconSize: IconSize;
  
  @Input()
  public active: boolean;

  @Input()
  public squareButton: boolean;

  @Input()
  public alternativeActiveColor: boolean;

  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  public colorClass: string;

  public ngOnChanges(changes): void {
    if (changes.active || changes.alternativeActiveColor) {
      if (!this.active) {
        this.colorClass = 'button-icon-inactive-color';
      } else if (!this.alternativeActiveColor) {
          this.colorClass = 'button-icon-active-color';
      } else {
        this.colorClass = 'button-icon-alternative-active-color';
      }
    }
  }

  public clickHandler(): void {
    this.clickEvent.emit();
  }

}
