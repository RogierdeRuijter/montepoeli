import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from './modules/shared/shared.module';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';
import {HomeComponent} from './components/home/home.component';
import {TitleBarComponent} from './components/title-bar/title-bar.component';
import {TranslateService, TranslateStore} from '@ngx-translate/core';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TitleBarComponent,
  ],
  providers: [
    CookieService,
    TranslateStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
