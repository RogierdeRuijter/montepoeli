import { Injectable, NgModule, Pipe, PipeTransform } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
// TODO: get this to work, it is currently not visiable to the game service spec
const translations: any = {};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

@Pipe({
  name: 'translate'
})
export class TranslatePipeMock implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}

@Injectable({providedIn: 'root'})
export class TranslateServiceStub {
  public get<T>(key: T): Observable<T> {
    return of(key);
  }
}

@NgModule({
  declarations: [
    TranslatePipeMock
  ],
  providers: [
    { provide: TranslateService, useClass: TranslateServiceStub },
    { provide: TranslatePipe, useClass: TranslatePipeMock },
  ],
  imports: [
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useClass: FakeLoader },
    })
  ],
  exports: [
    TranslatePipeMock,
    TranslateModule
  ]
})
export class TranslateTestingModule {}