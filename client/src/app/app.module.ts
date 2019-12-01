import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SharedModule} from './modules/shared/shared.module';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';
import {MainContentComponent} from './components/main-content/main-content.component';
import {TitleBarComponent} from './components/main-content/title-bar/title-bar.component';
import {TranslateStore} from '@ngx-translate/core';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {CustomTranslateModule} from './modules/shared/modules/translate/custom-translate.module';
import {AppInitService} from './services/app.init';
import {FooterComponent} from './components/main-content/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {GameModule} from './modules/game/game.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ServiceWorkerModule} from '@angular/service-worker';
import {LandingComponent} from './components/landing/landing.component';
import { ActionBarFooterComponent } from './components/main-content/action-bar-footer/action-bar-footer.component';
import { SimpleTitleBarComponent } from './components/main-content/simple-title-bar/simple-title-bar.component';
import { ButtonModule } from './modules/shared/modules/button/button.module';
import { TransitionModule } from './modules/shared/modules/transition/transition.module';

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
    MatTabsModule,
    GameModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    ButtonModule,
    TransitionModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainContentComponent,
    TitleBarComponent,
    LoginFormComponent,
    FooterComponent,
    LandingComponent,
    ActionBarFooterComponent,
    SimpleTitleBarComponent,
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
