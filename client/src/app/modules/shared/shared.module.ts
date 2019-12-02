import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material/material.module';
import {TranslateModule} from '@ngx-translate/core';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {ButtonComponent} from './components/button/button.component';
import {IconComponent} from './modules/icon/icon/icon.component';
import {GridColumnDirective} from './modules/grid/directives/grid-column.directive';
import {GridRowDirective} from './modules/grid/directives/grid-row.directive';
import {AuthGuard} from './guards/auth-guard.service';
import {ButtonRowComponent} from './modules/button/components/button-row/button-row.component';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {IconModule} from './modules/icon/icon.module';
import {CustomTranslateModule} from './modules/translate/custom-translate.module';
import {PositionDirective} from './modules/grid/directives/position.directive';
import {InvalidTokenInterceptor} from './interceptors/invalid-token.interceptor';
import { ButtonModule } from './modules/button/button.module';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonRowComponent,
  ],
  exports: [
    ButtonComponent,
    IconComponent,

    CommonModule,
    HttpClientModule,
    MaterialModule,
    TranslateModule,
    ToastrModule,
    FormsModule,
    FontAwesomeModule,
    NgxSkeletonLoaderModule,
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
    ToastrModule.forRoot(),
    FormsModule,
    NgxSkeletonLoaderModule,
    IconModule,
    CustomTranslateModule,
    ButtonModule
  ],
})
export class SharedModule {
}
