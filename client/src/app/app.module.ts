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
import { MobileContentModule } from './modules/mobile-content/mobile-content.module';
import { LargerScreenContentModule } from './modules/larger-screen-content/larger-screen-content.module';
import { GridModule } from './modules/shared/modules/grid/grid.module';

export function init_app(appLoadService: AppInitService) {
  return () => appLoadService.init();
}
@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    MobileContentModule, // TODO: remove imports that are not used
    LargerScreenContentModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainContentComponent,
    LoginFormComponent,
    LandingComponent,
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
