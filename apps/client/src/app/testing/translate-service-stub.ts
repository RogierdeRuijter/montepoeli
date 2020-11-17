import { Observable, of } from 'rxjs';
import { isString } from 'util';
import testTranslations from './test-translations';
import { Injectable } from '@angular/core';

// TODO: get this to work, it is currently not visiable to the game service spec
@Injectable({ providedIn: 'root' })
export class TranslateServiceStub {
  public get<T>(key: T): Observable<T> {
    return of(key);
  }

  public instant(key: string): string {
    const translationKeys = key.split('.');

    let translation: string;
    let translationObject: any = testTranslations;

    translationKeys.forEach((translationKey) => {
      translationObject = translationObject[translationKey];

      if (translationObject === (null || undefined)) {
        return;
      }

      if (isString(translationObject)) {
        translation = translationObject;
        return;
      }
    });

    return translation;
  }
}
