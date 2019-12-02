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
import {TitleBarComponent} from './modules/larger-screen-content/components/title-bar/title-bar.component';
import {TranslateStore} from '@ngx-translate/core';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {CustomTranslateModule} from './modules/shared/modules/translate/custom-translate.module';
import {AppInitService} from './services/app.init';
import {FooterComponent} from './modules/larger-screen-content/components/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {GameModule} from './modules/home/modules/game/game.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ServiceWorkerModule} from '@angular/service-worker';
import {LandingComponent} from './components/landing/landing.component';
import { ActionBarFooterComponent } from './modules/mobile-content/components/action-bar-footer/action-bar-footer.component';
import { SimpleTitleBarComponent } from './modules/mobile-content/components/simple-title-bar/simple-title-bar.component';
import { ButtonModule } from './modules/shared/modules/button/button.module';
import { TransitionModule } from './modules/shared/modules/transition/transition.module';
import { MaterialModule } from './modules/material/material.module';
import { UserActionsComponent } from './modules/shared/components/user-actions/user-actions.component';
import { UserActionsViewComponent } from './modules/shared/components/user-actions/user-actions-view/user-actions-view.component';

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
    TransitionModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainContentComponent,
    TitleBarComponent,
    LoginFormComponent,
    FooterComponent,
    LandingComponent,
    SimpleTitleBarComponent,
    UserActionsComponent,
    UserActionsViewComponent,
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
