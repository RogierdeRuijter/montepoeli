import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { Icons, IconSize } from '../../../../../../../shared/static-files/enums';

@Component({
  selector: 'app-simple-title-bar',
  templateUrl: './simple-title-bar.component.html',
  styleUrls: ['./simple-title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTitleBarComponent {
  @Output()
  public iconClicked: EventEmitter<void> = new EventEmitter();

  public Icons = Icons;
  public IconSize = IconSize;

  public handleButtonClicked(): void {
    this.iconClicked.emit();
  }
}
