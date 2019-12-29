import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icons, IconSize } from '../../../../../../shared/static-files/enums';

@Component({
  selector: 'app-simple-title-bar',
  templateUrl: './simple-title-bar.component.html',
  styleUrls: ['./simple-title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTitleBarComponent {
  public Icons = Icons;
  public IconSize = IconSize;
}
