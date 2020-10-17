import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-no-elevation',
  templateUrl: './button-no-elevation.component.html',
  styleUrls: ['./button-no-elevation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonNoElevationComponent {
  @Output()
  public clickEvent: EventEmitter<void> = new EventEmitter();

  @Input()
  public noPaddingLeft = false;

  public clicked(): void {
    this.clickEvent.emit();
  }
}
