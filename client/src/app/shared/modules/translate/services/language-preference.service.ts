import { Injectable } from '@angular/core';
import { UserService } from 'src/app/shared/services/users/user.service';
import { UtilService } from 'src/app/shared/services/util/util.service';
import { User } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguagePreferenceService {
  public defaultLanguage = 'en';
  
  constructor(private utilService: UtilService) { }

  public get(): string {
    let preferedLanguage = localStorage.getItem('preferedLanguage');

    if (this.utilService.isNullOrUndefined(preferedLanguage)) {
      preferedLanguage = this.defaultLanguage; 
    }

    return preferedLanguage;
  }

  public setWithUser(user: User): void {
    const translationFileCode = this.mapLanguageToTranslationFileCode(user.preferedLanguage);
    
    this.set(translationFileCode);
  }

  private mapLanguageToTranslationFileCode(preferedLangauge: string): string {
    if (preferedLangauge.toLowerCase() === 'dutch') {
      return 'nl';
    }

    if (preferedLangauge.toLowerCase() === 'english') {
      return 'en';
    }
  }

  private set(preference: string): void {
    localStorage.setItem('preferedLanguage', preference);
  }


}
