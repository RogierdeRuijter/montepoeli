import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { IconColor, Icons, IconSize } from 'src/app/shared/static-files/enums';
import { MatSelect } from '@angular/material/select';
import { AuthService } from 'src/app/shared/modules/auth/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

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

  public Icons = Icons;
  public IconSize = IconSize;

  public userActions = ['Logout']; // TODO: move to language file

  constructor(private authService: AuthService,
              private translateService: TranslateService) { }

  public ngOnInit(): void {
    const currentLang = this.translateService.getBrowserCultureLang();
    const alternativeLanguage = this.translateService.getLangs().find(lang => lang !== currentLang);

    this.userActions.push(alternativeLanguage); // TODO: use an icon
  }

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public actionSelected(userAction: string): void {
    if (userAction === 'Logout') { // TODO: move to language file
      this.authService.logout();
    }

    if (userAction === 'en') { // TODO: move to language file
      this.translateService.use('en');
    }

    if (userAction === 'nl') { // TODO: move to language file
      this.translateService.use('nl');
    }
  }
}
