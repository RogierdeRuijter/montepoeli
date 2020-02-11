import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IconColor, Icons, IconSize } from 'src/app/shared/static-files/enums';
import { MatSelect } from '@angular/material/select';
import { AuthService } from 'src/app/shared/modules/auth/services/auth/auth.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserActionsComponent implements OnInit {

  @ViewChild('userSettingsDropDown')
  public userSettingsDropDown: MatSelect;

  @Input()
  public settingsIconColor: IconColor;

  @Input()
  public altLanguage: string;

  public Icons = Icons;
  public IconSize = IconSize;

  public userActions = ['Logout']; // TODO: move to language file

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.userActions.push(this.altLanguage); // TODO: use an icon
  }

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public actionSelected(userAction: string): void {
    if (userAction === 'Logout') { // TODO: move to language file
      this.authService.logout();
    }

    if (userAction === 'Dutch') { // TODO: move to language file

    }

    if (userAction === 'English') { // TODO: move to language file

    }
  }
}
