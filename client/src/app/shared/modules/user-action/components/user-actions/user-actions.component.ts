import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { IconColor, Icons, IconSize } from 'src/app/shared/static-files/enums';
import { MatSelect } from '@angular/material/select';
import { AuthService } from 'src/app/shared/modules/auth/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePreferenceService } from '../../../translate/services/language-preference.service';
import { timer, Subject } from 'rxjs';
import { UserStoreService } from '../../../user/store/user-store.service';
import { User } from 'src/app/shared/interfaces/user.interface';
import { NotificationService } from '../../../notification/services/notification/notification.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserActionsComponent implements OnInit, OnDestroy {

  @ViewChild('userSettingsDropDown')
  public userSettingsDropDown: MatSelect;

  @Input()
  public settingsIconColor: IconColor;

  public Icons = Icons;
  public IconSize = IconSize;

  public alternativeLanguage: string;
  public setIconLanguage: string;

  private user: User;
  private destory$: Subject<void> = new Subject();

  constructor(private authService: AuthService,
              private translateService: TranslateService,
              private languagePreferenceService: LanguagePreferenceService,
              private userStoreService: UserStoreService,
              private changeDetectorRef: ChangeDetectorRef,
              private notificationService: NotificationService) { }

  public ngOnInit(): void {
    this.setAlternativeLanguage();

    this.userStoreService.get(this.destory$)
      .subscribe((user: User) => this.user = user);
  }

  private setAlternativeLanguage(): void {
    const currentLang = this.translateService.currentLang;
    
    this.alternativeLanguage = this.translateService.getLangs().find(lang => lang !== currentLang);
    
    if (this.alternativeLanguage === 'en') {
      this.setIconLanguage = 'ie';
    }

    if (this.alternativeLanguage === 'nl') {
      this.setIconLanguage = 'nl';
    }

    this.changeDetectorRef.detectChanges();
  }

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public switchLanguageHandler(): void {
    timer(300)
      .subscribe(() => {
        this.languagePreferenceService.setWithLanguageCode(this.user, this.alternativeLanguage);

        if (this.translateService.currentLang === 'en') {
          this.notificationService.info(this.translateService.instant('info.language-changed.english'));
        }
    
        if (this.translateService.currentLang === 'nl') {
          this.notificationService.info(this.translateService.instant('info.language-changed.dutch'));
        }

        this.setAlternativeLanguage();
      });
  }

  public logoutHandler(): void {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }
}
