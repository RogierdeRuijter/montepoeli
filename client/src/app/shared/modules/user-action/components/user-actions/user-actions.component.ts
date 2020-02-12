import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
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

  public logout = 'Logout'; // TODO: move to language file
  public alternativeLanguage: string;

  constructor(private authService: AuthService,
              private translateService: TranslateService,
              private changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.setAlternativeLanguage();
  }

  private setAlternativeLanguage(): void {
    const currentLang = this.translateService.currentLang;
    this.alternativeLanguage = this.translateService.getLangs().find(lang => lang !== currentLang);
    console.log(this.alternativeLanguage);
  }

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public switchLanguageHandler(): void {
    if (this.alternativeLanguage === 'en') {
        this.translateService.getTranslation('en')
        .subscribe(() => {
          this.translateService.setDefaultLang('en');
          this.translateService.use('en').subscribe(() => {
            this.setAlternativeLanguage();
            console.log(this.translateService.currentLang);
            this.changeDetectorRef.detectChanges();
          });
      });
    } else if (this.alternativeLanguage === 'nl') {
      this.translateService.use('nl').subscribe(() => this.setAlternativeLanguage());
    }
  }

  public logoutHandler(): void {
    this.authService.logout();
  }
}
