import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {InvalidTokenInterceptor} from './interceptors/invalid-token.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InvalidTokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InterceptorModule {
}
