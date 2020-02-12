import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateDirective} from './directives/translate.directive';
import {HttpModule} from '../http/http.module';

@NgModule({
  declarations: [
    TranslateDirective,
  ],
  exports: [
    TranslateDirective,
    TranslateModule,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true
    }),
    HttpModule
  ]
})
export class CustomTranslateModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(['nl', 'en']);

    translate.setDefaultLang('nl');
    this.translate.use('nl');
  }
}

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
