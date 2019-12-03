import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {InvalidTokenInterceptor} from './interceptors/invalid-token.interceptor';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InvalidTokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ]
})
export class InterceptorModule {
}
