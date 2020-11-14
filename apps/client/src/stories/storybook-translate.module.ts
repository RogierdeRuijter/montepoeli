import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient) => {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [],
  exports: [TranslateModule],
})
export class StorybookTranslateModule {
  public constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
