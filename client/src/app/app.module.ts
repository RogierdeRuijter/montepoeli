import {APP_INITIALIZER, NgModule} from '@angular/core';

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
import {TranslateStore} from '@ngx-translate/core';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {CustomTranslateModule} from './modules/shared/modules/translate/custom-translate.module';
import {AppInitService} from './services/app.init';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    SharedModule,
    CustomTranslateModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TitleBarComponent,
    LoginFormComponent,
  ],
  providers: [
    CookieService,
    TranslateStore,
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppInitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
