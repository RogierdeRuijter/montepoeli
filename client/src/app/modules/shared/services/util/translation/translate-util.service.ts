import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateUtilService {

  public constructor() {
  }

  public isLanguageKey(key: string): boolean {
    return key.includes('.');
  }
}
