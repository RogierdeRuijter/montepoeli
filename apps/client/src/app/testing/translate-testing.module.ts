import { Injectable, NgModule, Pipe, PipeTransform } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslatePipe,
  TranslateService,
} from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { isString } from 'util';
// TODO: get this to work, it is currently not visiable to the game service spec
const translations: any = {
  pages: {
    home: {
      games: {
        labels: {
          draw: 'Draw',
        },
      },
    },
  },
};

class FakeLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

@Pipe({
  name: 'translate',
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}

@Injectable({ providedIn: 'root' })
export class TranslateServiceStub {
  public get<T>(key: T): Observable<T> {
    return of(key);
  }

  public instant(key: string): string {
    const translationKeys = key.split('.');

    let translation: string;
    let translationObject: any = translations;

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

@NgModule({
  declarations: [TranslatePipeMock],
  providers: [
    { provide: TranslateService, useClass: TranslateServiceStub },
    { provide: TranslatePipe, useClass: TranslatePipeMock },
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: FakeLoader },
    }),
  ],
  exports: [TranslatePipeMock, TranslateModule],
})
export class TranslateTestingModule {}
