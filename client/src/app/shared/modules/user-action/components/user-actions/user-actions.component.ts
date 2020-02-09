import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { IconColor, Icons, IconSize } from 'src/app/shared/static-files/enums';
import { MatSelect } from '@angular/material/select';
import { AuthService } from 'src/app/shared/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserActionsComponent {

  @ViewChild('userSettingsDropDown')
  public userSettingsDropDown: MatSelect;

  @Input()
  public settingsIconColor: IconColor;

  public Icons = Icons;
  public IconSize = IconSize;

  public userActions = ['Logout']; // TODO: move to language file

  constructor(private authService: AuthService) { }

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public actionSelected(userAction: string): void {
    if (userAction === 'Logout') {
      this.authService.logout();
    }
  }
}
