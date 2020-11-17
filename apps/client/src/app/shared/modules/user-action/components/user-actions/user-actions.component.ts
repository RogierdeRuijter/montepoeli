import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { IconColor } from '../../../../static-files/enums';
import { MatSelect } from '@angular/material/select';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePreferenceService } from '../../../translate/services/language-preference.service';
import { Subject, timer, Observable } from 'rxjs';
import { UserStoreService } from '../../../user/store/user-store.service';
import { User } from '../../../../interfaces/user.interface';
import { NotificationService } from '../../../notification/services/notification/notification.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserActionsComponent implements OnInit, OnDestroy {
  @ViewChild('userSettingsDropDown')
  public userSettingsDropDown: MatSelect;

  @Input()
  public settingsIconColor: IconColor;

  public alternativeLanguage: string;
  public setIconLanguage: string;

  private user: User;
  private destory$: Subject<void> = new Subject();

  constructor(
    private authService: AuthService,
    private translateService: TranslateService,
    private languagePreferenceService: LanguagePreferenceService,
    private userStoreService: UserStoreService,
    private changeDetectorRef: ChangeDetectorRef,
    private notificationService: NotificationService
  ) {}

  public ngOnInit(): void {
    this.setAlternativeLanguage();

    this.userStoreService.get(this.destory$).subscribe((user: User) => (this.user = user));

    this.translateService.onLangChange.pipe(takeUntil(this.destory$)).subscribe((langObject: any) => {
      const lang = langObject.lang;

      if (lang === 'en') {
        this.notificationService.info(this.translateService.instant('info.language-changed.english'));
      }

      if (lang === 'nl') {
        this.notificationService.info(this.translateService.instant('info.language-changed.dutch'));
      }

      this.setAlternativeLanguage(lang);
    });
  }

  public userIconHandler(): void {
    this.userSettingsDropDown.open();
  }

  public switchLanguageHandler(): void {
    this.waitForDropDownToClose().subscribe(() =>
      this.languagePreferenceService.setWithLanguageCode(this.user, this.alternativeLanguage)
    );
  }

  public logoutHandler(): void {
    this.authService.logout();
  }

  public ngOnDestroy(): void {
    this.destory$.next();
    this.destory$.complete();
  }

  private waitForDropDownToClose(): Observable<any> {
    return timer(300);
  }

  private setAlternativeLanguage(lang?: string): void {
    const currentLang = lang ? lang : this.translateService.currentLang;

    this.alternativeLanguage = this.translateService.getLangs().find((lang1) => lang1 !== currentLang);

    if (this.alternativeLanguage === 'en') {
      this.setIconLanguage = 'ie';
    }

    if (this.alternativeLanguage === 'nl') {
      this.setIconLanguage = 'nl';
    }

    this.changeDetectorRef.detectChanges();
  }
}
