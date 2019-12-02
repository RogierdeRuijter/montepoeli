import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateDirective} from './directives/translate.directive';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  declarations: [
    TranslateDirective,
  ],
  exports: [
    TranslateDirective,
    TranslateModule,
  ],
})
export class CustomTranslateModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.translate.use('en');
  }
}

export function HttpLoaderFactory(http: HttpClient): any {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
