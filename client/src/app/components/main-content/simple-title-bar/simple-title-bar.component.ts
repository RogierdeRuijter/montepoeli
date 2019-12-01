import { Component, OnInit, ViewChild, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Icons, IconSize } from '../../../modules/shared/static-files/enums';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-simple-title-bar',
  templateUrl: './simple-title-bar.component.html',
  styleUrls: ['./simple-title-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTitleBarComponent {

  @ViewChild('userSettingsDropDown', {static: true})
  public userSettingsDropDown: MatSelect;

  @Output()
  public logoutEvent: EventEmitter<void> = new EventEmitter();

  public Icons = Icons;
  public IconSize = IconSize;

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public optionSelected(): void {
    this.logoutEvent.emit();
  }
}
