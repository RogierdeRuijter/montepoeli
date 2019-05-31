import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth-guard.service';
import {ButtonComponent} from './components/button/button.component';
import {LoginComponent} from './components/login/login.component';
import {TranslateDirective} from './directives/translate.directive';
import {HomeComponent} from './components/home/home.component';
import {MaterialModule} from './modules/material/material.module';
import {GameTableComponent} from './components/home/game-table/game-table.component';
import {IconComponent} from './components/icon/icon.component';
import {TableActionComponent} from './components/home/table-action/table-action.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TranslateDirective,
    HomeComponent,
    ButtonComponent,
    GameTableComponent,
    IconComponent,
    TableActionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'en-US',
    },
    AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: RequestsInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
