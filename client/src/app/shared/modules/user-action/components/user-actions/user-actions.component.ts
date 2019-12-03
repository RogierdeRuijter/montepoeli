import {ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Icons, IconSize} from 'src/app/shared/static-files/enums';
import {MatSelect} from '@angular/material';
import {AuthService} from 'src/app/shared/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class UserActionsComponent {

  @ViewChild('userSettingsDropDown', {static: true})
  public userSettingsDropDown: MatSelect;

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
