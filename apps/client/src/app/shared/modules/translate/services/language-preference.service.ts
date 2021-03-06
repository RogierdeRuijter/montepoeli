import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from '../../../services/util/util.service';
import { UserService } from '../../../services/users/user.service';
import { User } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguagePreferenceService {
  private defaultLanguage = 'en';

  constructor(
    private utilService: UtilService,
    private translateService: TranslateService,
    private userService: UserService
  ) {}

  public get(): string {
    let preferedLanguage = localStorage.getItem('preferedLanguage');

    if (this.utilService.isNullOrUndefined(preferedLanguage)) {
      preferedLanguage = this.defaultLanguage;
    }

    return preferedLanguage;
  }

  public setWithUser(user: User): void {
    const translationFileCode = this.mapLanguageToTranslationFileCode(user.preferedLanguage);

    this.storagePrefereanceInBrowser(translationFileCode);
  }

  public setWithLanguageCode(user: User, languageCode: string): void {
    if (languageCode === 'en') {
      this.translateService.use('en');
    } else if (languageCode === 'nl') {
      this.translateService.use('nl');
    }

    this.storagePrefereanceInBrowser(languageCode);

    this.userService
      .setUserLanguagePreference(user.name, this.mapTranslationCodeToEnglishLanguageName(languageCode))
      .subscribe();
  }

  public mapTranslationCodeToEnglishLanguageName(languageCode: string): string {
    if (languageCode === 'nl') {
      return 'dutch';
    }

    if (languageCode === 'en') {
      return 'english';
    }
  }

  private mapLanguageToTranslationFileCode(englishPerferedLanguage: string): string {
    if (englishPerferedLanguage === 'dutch') {
      return 'nl';
    }

    if (englishPerferedLanguage === 'english') {
      return 'en';
    }
  }

  private storagePrefereanceInBrowser(preference: string): void {
    if (this.utilService.isNullOrUndefined(preference)) {
      localStorage.setItem('preferedLanguage', this.defaultLanguage);
    } else {
      localStorage.setItem('preferedLanguage', preference);
    }
  }
}
