import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {AuthGuard} from './guards/auth-guard.service';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {InvalidTokenInterceptor} from './interceptors/invalid-token.interceptor';
import { CustomTranslateModule } from './modules/translate/custom-translate.module';
import { TransitionModule } from './modules/transition/transition.module';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    CustomTranslateModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: InvalidTokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    CustomTranslateModule,
    TransitionModule
  ],
})
export class SharedModule {
}
