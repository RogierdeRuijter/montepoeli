import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SPACER } from '../../../../../../../shared/static-files/contants';
import { Icons, IconSize, IconColor } from '../../../../../../../shared/static-files/enums';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public SPACER = SPACER;

  public IconSize = IconSize;
  public Icons = Icons;
  public IconColor = IconColor;
}
