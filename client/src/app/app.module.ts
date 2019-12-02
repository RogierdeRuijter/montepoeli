import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';
import {MainContentComponent} from './components/main-content/main-content.component';
import {TranslateStore} from '@ngx-translate/core';
import {LoginFormComponent} from './components/login/login-form/login-form.component';
import {AppInitService} from './services/app.init';
import {ServiceWorkerModule} from '@angular/service-worker';
import {LandingComponent} from './components/landing/landing.component';
import { MobileContentModule } from './modules/mobile-content/mobile-content.module';
import { LargerScreenContentModule } from './modules/larger-screen-content/larger-screen-content.module';
import { GridModule } from './modules/shared/modules/grid/grid.module';
import { FormsModule } from '@angular/forms';

export function init_app(appLoadService: AppInitService): () => Promise<any> {
  return () => appLoadService.init();
}
@NgModule({
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
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
    MobileContentModule, // TODO: remove imports that are not used
    LargerScreenContentModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
