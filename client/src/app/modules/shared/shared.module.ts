import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {TranslateDirective} from './directives/translate.directive';
import {ButtonComponent} from './components/button/button.component';
import {IconComponent} from './components/icon/icon.component';
import {BootstrapColumnDirective} from './directives/bootstrap-column.directive';
import {BootstrapRowDirective} from './directives/bootstrap-row.directive';
import {AuthGuard} from './guards/auth-guard.service';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ButtonRowComponent} from './components/button-row/button-row.component';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
    ToastrModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [
    TranslateDirective,
    ButtonComponent,
    IconComponent,
    BootstrapColumnDirective,
    BootstrapRowDirective,
    ButtonRowComponent,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  ],
  exports: [
    TranslateDirective,
    ButtonComponent,
    IconComponent,
    BootstrapColumnDirective,
    BootstrapRowDirective,

    CommonModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule,
    ToastrModule,
    FormsModule,
    FontAwesomeModule,
    NgxSkeletonLoaderModule,
  ],
})
export class SharedModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
