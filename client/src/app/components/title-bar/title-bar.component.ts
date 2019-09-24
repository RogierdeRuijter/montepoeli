import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ThemePalette} from '@angular/material';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleBarComponent {
  public color: ThemePalette = 'primary';
}
